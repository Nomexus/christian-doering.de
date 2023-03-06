import fs from "node:fs";
import path from "node:path";
import helmet from "helmet";
import express from "express";
import { fileURLToPath } from "node:url";

const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production"
) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const resolve = (p) => path.resolve(__dirname, p);

  const indexProd = isProd
    ? fs.readFileSync(resolve("dist/client/index.html"), "utf8")
    : "";

  const manifest = isProd
    ? JSON.parse(
        fs.readFileSync(resolve("./dist/client/ssr-manifest.json"), "utf8")
      )
    : {};

  const app = express();

  /**
   * @type {import("vite").ViteDevServer}
   */
  let vite;
  if (!isProd) {
    vite = await (
      await import("vite")
    ).createServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: "ssr",
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            "default-src": ["'self'", "localhost"],
            "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            "connect-src": ["'self'", "localhost", "ws://localhost:24678"],
            "img-src": ["'self'"],
          },
        },
        crossOriginResourcePolicy: false,
        crossOriginEmbedderPolicy: false,
      })
    );
  } else {
    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            "default-src": ["'self'"],
            "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            "connect-src": ["'self'"],
            "img-src": ["'self'"],
          },
        },
        crossOriginResourcePolicy: false,
        crossOriginEmbedderPolicy: false,
      })
    );
    app.use((await import("compression")).default());
    app.use(
      (await import("serve-static")).default(resolve("dist/client"), {
        index: false,
        maxAge: "90 days",
      })
    );
  }

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
      } else {
        template = indexProd;
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const [appHtml, preloadLinks, ctx, router] = await render(url, manifest);

      if (!ctx.teleports) {
        ctx.teleports = {};
      }

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--app-html-->`, appHtml)
        .replace(`{{ htmlAttrs }}`, ctx.teleports.htmlAttrs || "")
        .replace(`{{ headAttrs }}`, ctx.teleports.headAttrs || "")
        .replace(`{{ bodyAttrs }}`, ctx.teleports.bodyAttrs || "")
        .replace(`{{ head }}`, ctx.teleports.head || "")
        .replace(`{{ bodyPrepend }}`, ctx.teleports["body-prepend"] || "")
        .replace(`{{ bodyAppend }}`, ctx.teleports.body || "")
        .replace(`{{ locale }}`, router.currentRoute.value.params.locale || "");

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite && vite.ssrFixStacktrace(e);

      if (process.env.NODE_ENV === "production") {
        res.status(500).end("An error occured");
      } else {
        res.status(500).end(e.stack);
      }
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer()
    .then(({ app }) =>
      app.listen(3000, () => {
        console.log("http://localhost:8080");
      })
    )
    .catch(undefined);
}

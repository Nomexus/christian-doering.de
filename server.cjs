import("./server.js")
  .then(() => console.log("@@@@@@@ IT WORKED"))
  .catch((e) => console.log("@@@@@@@ IT FAILED", e.message, e.stack));

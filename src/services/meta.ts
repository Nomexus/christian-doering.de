import { useHead } from "@unhead/vue";
import { ComposerTranslation } from "vue-i18n";

export function setMeta(source: any, t: ComposerTranslation) {
  if (typeof source.title === "undefined") {
    source.title = t("meta.default");
  } else {
    source.title = `${source.title} - ${t("meta.default")}`;
  }
  useHead(source);
}

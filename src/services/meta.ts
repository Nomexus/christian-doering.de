import {MetaSource, useMeta} from "vue-meta";
import {ComposerTranslation} from "vue-i18n";

export function setMeta(source: MetaSource, t: ComposerTranslation) {
    if(typeof source.title === "undefined") {
        source.title = t('meta.default')
    } else {
        source.title = `${source.title} - ${t('meta.default')}`
    }
    useMeta(source)
}
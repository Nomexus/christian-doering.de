import {MetaSource, useMeta} from "vue-meta";

export function setMeta(source: MetaSource) {
    if(typeof source.title === "undefined") {
        source.title = "Christian Döring - Full-Stack Web-Developer"
    } else {
        source.title = source.title + " - Christian Döring - Full-Stack Web-Developer"
    }
    useMeta(source)
}
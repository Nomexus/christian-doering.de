import {SUPPORT_LOCALES} from "@/services/i18n";

export function routeWithoutParam(path: string) {
    const pathParts = path.split("/").filter((part: string, index) => {
        if ((part !== "" && !SUPPORT_LOCALES.includes(part)) || index > 1) {
            return part
        }
    })

    return pathParts.join("/")
}
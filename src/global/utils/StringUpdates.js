export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function splitOnUpperCase(string) {
    return string.split(/(?=[A-Z])/).join(" ").toLowerCase();
}

export function countCharacters(string) {
    return string.replace(/\s/g, "").length
}

function shortcut (string) {
    const str = string.split("");
    const arr = [];

    for ( let i = 0; i < str.length; i++) {
        let item = str[i].toLowerCase();
        if(item !== "a" && item !== "e" && item !== "i" && item !== "o" && item !== "u") {
            arr.push(str[i]);
        }
    }

    return arr.join("")
}
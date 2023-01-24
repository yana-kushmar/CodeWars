function makeBackronym(string){
    const words = []
    const newString = string.split("");
    for ( let i = 0; i < newString.length; i++) {
        words.push(dict[newString[i].toUpperCase()])
    }
    return words.join(" ");
};

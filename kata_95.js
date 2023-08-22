function doubleChar(str) {
    const arr = str.split("")
    const result = arr.map(i => i + i).join("")
    return result
}

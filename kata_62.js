function digitize(n) {
    const str = n.toString()
    const arr = str.split("").reverse()
    return arr.map(el => +el)


}
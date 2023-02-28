function squareDigits(num){
    const str = num.toString()
    const arr = str.split("")
    return +arr.map(el => el * el).join("")


}

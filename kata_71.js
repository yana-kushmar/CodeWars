function highAndLow(numbers){
    const arr = numbers.split(" ")

    const sort = arr.sort((a,b) => {
        return b - a
    })
    return `${sort[0]} ${sort[sort.length - 1]}`

}
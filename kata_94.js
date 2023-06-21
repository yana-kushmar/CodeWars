function findAverage(array) {
    if(array.length === 0){
        return 0
    }
    const sum = array.reduce((acc, curr) => {
        return acc + curr
    })

    return sum/array.length
}
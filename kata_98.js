function digitalRoot(n) {
    const arr = Array.from(String(n), Number)
    const sum = arr.reduce((acc, curr) => {
        let currentSum = acc + curr
        if(currentSum > 9){
            currentSum = digitalRoot(currentSum)
        }
        return currentSum
    }, 0)

    return sum
}
const squareSum = (numbers) => {
    const arr =  numbers.map(el => el*el)
    let count = 0

    for (let i = 0; i < arr.length; i ++) {
        count += arr[i]

    }
    return count
}
function sumTwoSmallestNumbers(numbers) {
    const sort = numbers.sort((a, b) => {
        return a - b
    })
    return sort[0] + sort[1]
}
function invert(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(-array[i])
    }
    return result;
}
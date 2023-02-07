function largest(n, array) {
    const arr = array.sort((a, b) => {
        return b - a
    })

    return arr.slice(0, n).sort((a,b) => {
        return a - b
    });
}
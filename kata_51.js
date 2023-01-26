function isPalindrome(x) {
    const arr = x.split("").reverse().join("");
    return arr.toUpperCase() === x.toUpperCase()
}
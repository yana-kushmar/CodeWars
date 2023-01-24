function addLength(str) {
    const arr = [];
    const newArr = str.split(" ");
    for ( let i = 0; i < newArr.length; i++) {
        const item = newArr[i];
        arr.push(item + " " + item.length)
    }
    return arr;
}

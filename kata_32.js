function sumOfDifferences(arr) {
    const newArr = arr.sort( function(a,b) {
        return b - a;
    });
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i + 1] === undefined){
            break;
        }
        let dif = newArr[i] - newArr[i + 1];
        count += dif
    }
    return count
}
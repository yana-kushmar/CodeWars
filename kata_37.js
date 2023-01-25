function numberJoy(n) {
    const str = String(n);
    const arr = str.split("");
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        count += Number(arr[i]);
    }

    if(n % count === 0) {
        let revCount =  String(count).split("").reverse().join("")
        let revCountNum = Number(revCount)
        if(count * revCountNum === n) {
            return true;
        }

    }
    return false;
}
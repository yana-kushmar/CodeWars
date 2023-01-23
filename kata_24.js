function spinWords(string){
    const result = [];
    const arr = string.split(" ");
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            result.push(arr[i].split("").reverse().join(""));
        } else{
            result.push(arr[i]);
        }

    }
    return result.join(" ")
}
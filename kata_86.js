function nameShuffler(str){
    const arr = str.split(" ")
    const newA = [arr[0], arr[1]] = [arr[1], arr[0]]
    return newA.join(" ")
}
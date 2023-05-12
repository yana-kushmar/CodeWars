function filter_list(l) {
    let arr = l
    for (let i = arr.length-1; i>= 0; i--) {
        if(typeof arr[i] !== "number")
            arr.splice(i, 1);

    }
    return arr

}
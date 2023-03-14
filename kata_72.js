function descendingOrder(n){
    const arr = n.toString().split("").map(el => +el)
    const hight = arr.sort((a,b) => {
        return b - a
    })

    return +hight.join("")
}

Array.prototype.remove_ = function(integer_list, values_list){
    const newArr = []
    for(let i = 0; i < integer_list.length; i++) {
        if (!values_list.includes(integer_list[i])) {
            newArr.push(integer_list[i])
        }
    }

    return newArr
}

function abbrevName(name){
    const arr = name.toUpperCase().split(" ")


    return arr[0][0] + `.` + arr[1][0]

}
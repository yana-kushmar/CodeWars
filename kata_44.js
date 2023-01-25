function toCsvText(array) {
    let str = "";
    for( let i = 0; i < array.length; i++) {
        let str1 = array[i].join(",");
        if( array[i + 1]) {
            str1 += "\n"

        }
        str += str1;

    }
    return str;
}
function findShort(s){
    const arr = s.split(" ");

    for ( let i = 1; i <= s.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length === i){
                return  i;
            }
        }
    }
}
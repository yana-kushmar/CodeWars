function grow(x){
    let count = 1;
    for ( let i = 0; i < x.length; i++ ){
        count *= x[i];
    }
    return count;
}
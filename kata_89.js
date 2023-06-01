const reverseSeq = n => {
    return [ ...Array(n).keys() ].map( i => ++i).reverse();

};
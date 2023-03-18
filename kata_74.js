function findOdd(A) {
    const count = A.reduce( (total, num) => {
        total[num] = (total[num] || 0) + 1 ;
        return total
    } , {})
    const entries = Object.entries(count)

    for (let i = 0; i < entries.length; i++) {
        if(entries[i][1] %2 !== 0) {
            return +entries[i][0]
        }
    }
}
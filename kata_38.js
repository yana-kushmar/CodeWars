function snail(column, day, night) {
    let count = 0;
    let countD = 0;

    while(count < column) {
        countD++;

        count += day;

        if(count >= column) {
            break;
        }

        count -= night;
    }

    return  countD;
}
const quarterOf = (month) => {
    if(1 <= month && month <= 3) {
        return 1;
    }

    if(4 <= month && month <= 6) {
        return 2;
    }

    if(7 <= month && month <= 9) {
        return 3;
    }

    if(10 <= month && month <= 12) {
        return 4;
    }
}
function flip(d, a) {
    function compare (b, c) {
        if (b < c) {
            return -1;
        }
        if (b> c) {
            return 1;
        }
        return 0;
    }

    function compare1 (b, c) {
        if (b < c) {
            return 1;
        }
        if (b> c) {
            return -1;
        }
        return 0;
    }

    if (d === "L"){
        return a.sort(compare1);
    }
    if (d === "R"){
        return a.sort(compare);
    }

}
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const result = [];
    for (let i = 0; i < birds.length; i++) {
        const item = birds[i];
        let hasGeese = false;

        for (let j = 0; j < geese.length; j++) {
            if (item === geese[j]) {
                hasGeese = true;
            }
        }
        if (hasGeese === false) {

            result.push(item);
        }
    }
    return result;

};
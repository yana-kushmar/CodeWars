function getCount(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":{
                result.push(str[i]);
                break;
            }
        }

    }
    return result.length;
}
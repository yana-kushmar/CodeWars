function computerToPhone(numbers){
    return numbers.split("").map(el => {
        switch(el){

            case "7":
                return "1"

            case "8":
                return "2"

            case "9":
                return "3"

            case "1":
                return "7"

            case "2":
                return "8"

            case "3":
                return "9"

            default:
                return el

        }

    }).join("")
}
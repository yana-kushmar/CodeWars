
var circleArea = function(radius) {
    console.log(radius)
    if(typeof radius === "string" || radius <= 0){
        return false
    }else {

        return Number((Math.PI * radius*radius).toFixed(2))
    }

}
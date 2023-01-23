function mango(quantity, price){
    const mangoOnDiscount = Math.floor(quantity / 3)
    return (quantity - mangoOnDiscount) * price;
}
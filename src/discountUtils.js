
//calculate total price of cart items
export function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}  

//calculate discount amount based on discount percentage
export function calculateButtonDiscount(totalPrice,discountPercent){
    return (totalPrice * discountPercent) / 100;
}

//get discount percentage based on coupon code
export function getCouponDiscount(couponCode,totalPrice) {
    let discountPercent = 0;
     switch (couponCode) {
         case 'MOUNI10':
          discountPercent = 10;
          break;
            case 'MOUNI20':         
            discountPercent = 20;
            break;
            case 'MOUNI30':
            discountPercent = 30;
            break;                                      
            default:
            discountPercent = 0;
     }
     const discountAmount = (totalPrice * discountPercent) / 100;
     const isValid = discountPercent > 0;
        return {isValid, discountPercent, discountAmount };
}

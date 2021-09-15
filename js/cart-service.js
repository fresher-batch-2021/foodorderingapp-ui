class BillCalculator
{
    static getTotalAmount()
    {
        let cartItem= JSON.parse(localStorage.getItem("PRODUCTS"))||[];
        console.log(cartItem);
        let total=0;
        if (cartItem) {           
        
        for(let item of cartItem)
        {
            total=total+item.Quantity*item.price;
        }
    }
    return total;
    }
}
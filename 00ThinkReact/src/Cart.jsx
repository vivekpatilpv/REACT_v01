const mycart = [
    {
    id: 1,
    name: "aloo parantha",
    price: 80
    },
    {
    id: 2,
    name: "Onion Capsicum Pizza",
    price: 180
    },
    {
    id: 3,
    name: "Pav bhaji",
    price: 40
    },
    {
    id: 4,
    name: "French Toast",
    price: 100
    }
   ];

   
   function Cart() {
    const total = mycart.reduce((total,current)=> total+current.price,0);
     return (
        
        <>
         
         <ol>
          {mycart.map(cart=>(<li key={cart.id}>
            {cart.name}</li>))}
            </ol>

            Total : {total}
        </>
     
     )
   }
   
   export default Cart;
   
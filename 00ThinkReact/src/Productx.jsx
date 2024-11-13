const product = {
    id: "AC1023",
    name: "Air Conditioner",
    price: 29600,
    specification: "1 Ton, 4 Star Rating",
    warranty: "5 Years Compressor Warranty"
   };
   

   function Productx(){
    return(
        <>
        <h1>{product.name}</h1>
        <div>Price: {product.price}</div>
        <div>Specification: {product.specification}</div>
        <div>Waranty: {product.warranty}</div>
        </>
    );
   }

   export default Productx;
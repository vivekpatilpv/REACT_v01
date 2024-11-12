const fruits = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Orange", price: 50 },
    { id: 3, name: "Grapes", price: 30 },
    { id: 4, name: "Pineapple", price: 70 }
    ];

    function Fruitscss(){
        return(
            <>
            <h3>Fruits CSS </h3>
            {fruits.map(fruit=>(<li key={fruit.id} style={{color: fruit.price > 50 ? "green" : "red"}}>{fruit.name} : INR : {fruit.price}</li>))}
            </>
        );
    }
   

    export default Fruitscss;
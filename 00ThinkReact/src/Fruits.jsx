const fruits = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Orange", price: 54 },
    { id: 3, name: "Grapes", price: 30 },
    { id: 4, name: "Pineapple", price: 70 }
    ];
   

function Fruits(){
        return(
            <>
            <div>
                {fruits.map(fruit=>(<li key={fruit.id}>{fruit.name} : {fruit.price}</li>))}
            </div>
            </>
        );
    }

    export default Fruits;
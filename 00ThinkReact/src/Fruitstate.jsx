const fruits = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Orange", price: 54 },
    { id: 3, name: "Grapes", price: 30 },
    { id: 4, name: "Pineapple", price: 70 }
    ];
   
   
    // const Highlight = () => {
    //     return (
          
    //     )
    // }
    const [border, setBorder] = useState(0);


function Fruitstate() {

  
  return (

    <>

<div>Fruitstate</div>

{fruits.map(fruit=>(<li key={fruit.key} >{fruit.name} : {fruit.price}</li>))};

<button onClick={()=>setBorder(border )}></button>
    </>
    
  )
}

export default Fruitstate
import { useState } from "react";

const fruits = [
  { name: "Apple", color: "Red", quantity: 10 },
  { name: "Banana", color: "Yellow", quantity: 5 },
  { name: "Orange", color: "Orange", quantity: 3 },
  { name: "Grape", color: "Purple", quantity: 7 }
];


function InputFive() {
    const [fruitDetails,SetfruitDetails] = useState('');

    
  return (
    <>
    <div>InputFive</div>
    
    <select name="" id="" onChange={(e)=>SetfruitDetails(e.target.value)}>
        {fruits.map((f,index)=><option key={index}value={f.name}>{f.name}</option>)}
    </select>
{console.log(fruitDetails)}
    
    {fruitDetails ? fruitDetails :  <div>{fruits.map((f,index)=>
        <li key={index}>{f.name}:{f.color}:{f.quantity}:</li>
    )}</div> }
    </>
    
  )
}

export default InputFive
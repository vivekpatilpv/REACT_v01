import React, { useState } from 'react'

export default function Sum({ num1, num2}) {
    // const num1 = 5;
    // const num2 = 4;
    // const sum = num1 + num2;
    const product = {
        id: "AC1023",
        name: "Air Conditioner",
        price: 29600,
        specification: "1 Ton, 4 Star Rating",
        warranty: "5 Years Compressor Warranty"
       };


       const fruits = [
        { id: 1, name: "Apple", price: 20 },
        { id: 2, name: "Orange", price: 54 },
        { id: 3, name: "Grapes", price: 30 },
        { id: 4, name: "Pineapple", price: 70 }
        ];
       
       const [count,setCount] = useState(0);
        const [colorHighlight, setColor] = useState(false);

       const handleClick = () =>{
        setColor(colorHighlight==false ? true : false );
       }
  return (
    
    <>
    <div id="One">
        <h1 >Sum of Numbers </h1>
        <h2>First Number : {num1}</h2>
        <h2>Second Number : {num2}</h2>
        <h2>Sum of Numbers : {num1 + num2 }</h2>
    </div>

    <div id="two">
<h1>{product.name}</h1>
    </div>

    <div id="three">
        {fruits.map(({price,id,name})=> (<li style={{color : colorHighlight && price<50 ? 'red' : 'black'}} key={id}>{name} : {price}/-</li>))}
        <button onClick={()=>handleClick()}>Apply</button>
    </div>
    
    <h1>useState Hook</h1>
    <div>
        <h2>Counter : {count}</h2>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
    </>
  )
}

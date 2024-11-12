import React, { useState } from 'react'

export default function Inputs() {

    const [text,setText] =  useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');


    const [fruitNameLive,setfruitName] = useState('');
    const [fruitNameSearch, setfruitNameSearch] = useState('');
    const handleFirstName = (e) =>{
        setfirstName(e.target.value);
    }

    const handleLastName = (e) =>{
        setlastName(e.target.value); 
         
    }
    const handleClick = () =>{
      console.log(fruitNameLive);
      const foundFruit = fruits.find((fruit)=>(fruit.name === fruitNameLive))
      setfruitNameSearch(foundFruit ? foundFruit : 'NA');
      console.log("Founded",fruitNameSearch);
    }

    const handleChangeText = (e) => {
      setfruitName(e.target.value)
      console.log(fruitNameLive);
    }

    const fruits = [
      { name: "Apple", color: "Red", quantity: 10 },
      { name: "Banana", color: "Yellow", quantity: 5 },
      { name: "Orange", color: "Orange", quantity: 3 },
      { name: "Grape", color: "Purple", quantity: 7 }
    ];

    const [tasks, setTasks] = useState([
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Complete React project', completed: false },
      { id: 3, text: 'Go for a walk', completed: false },
    ]);

    const [striked, setStriked] = useState('')

    const handleCheckBox = () => {
      setStriked(pre)
    }

  return (
    <>


    
        <div>Inputs </div>
        <div>Inputs 1</div>

        <input onChange={(e)=>setText(e.target.value)} 
        type="text" />
        <p>{text}</p>

        <div>
            <h1>Inputs 2</h1>
            <label className="inputField">
            First Name: <input type="text" onChange={handleFirstName}/>
            </label>
            <label className="inputField">
              Last Name:  <input type="text" onChange={handleLastName}/>
            </label>
            <p>The name is {firstName} {lastName}</p>
        </div>


<div>
  <h1>Inputs 3</h1>
  <label  className='input3'>
  <input type='text' onChange={handleChangeText}/>
  <button onClick={()=>handleClick()}>Search</button>
  </label>
   

   {fruitNameSearch==='' ? (<p></p>) : (fruitNameSearch 
   && (fruitNameSearch === 'NA') ? (<p>nOT fOUND</p>)
: (<p>Found Fruit: {fruitNameSearch.name}</p>))
   }
   

</div>


<div>
  <h1>Inputs 4</h1>
  
</div>


<div>
  <h1>Inputs - Strike Through -PENDING</h1>
</div>



<div>
  <h1>React II Exercise - USEEFFECT</h1>




</div>

    </>
 
    
  )
}

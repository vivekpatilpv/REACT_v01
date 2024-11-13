import { useState } from "react"


const fruits = [
    { name: "Apple", color: "Red", quantity: 10 },
    { name: "Banana", color: "Yellow", quantity: 5 },
    { name: "Orange", color: "Orange", quantity: 3 },
    { name: "Grape", color: "Purple", quantity: 7 }
  ];


function InputThree() {
const [fruitName,setFruitName] = useState('')
const [msg,setmsg] = useState('');
const [fruitDetails, setFruitDetails] = useState('')


  const searchFruit = () => {
    
    const fruitfound = fruits.find(f=>f.name.toLowerCase() === fruitName.toLowerCase())

    if(fruitfound){
        setFruitDetails(fruitfound);
        setmsg('')
    }
    else{
      setmsg('Not Found');
      setFruitDetails('');

    }
  }

  return (
    <>
        <div>InputThree</div>
        <input type="text" onChange={(e)=>setFruitName(e.target.value)} placeholder='Fruit Name:' />
        <button onClick={searchFruit}>Search</button>

        {fruitDetails ? (
          <div>Found : {fruitDetails.name}</div>
        ): <div>{msg}</div>}
      

    </>
  )
}

export default InputThree
import { useState } from "react"





function InputFour() {

  const [colour, setColor] = useState('black');

  return (


    <>
     <div>InputFour</div>
<div>
  <select name="" id="color-my" onChange={(e)=>setColor(e.target.value)}>
  <option value="black">black</option>
    <option value="red">red</option>
    <option value="green">green</option>
    <option value="blue">blue</option>
  </select>
   
</div>
<div>{colour}</div>
<div style={{color:colour}}>COLOUR COLOUR WHICH COLOUR DO YOU WANT !! {colour }</div>

    </>
   
  )
}

export default InputFour
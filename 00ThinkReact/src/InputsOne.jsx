import { useState } from "react";





function InputsOne() {

    const [name,setName] = useState('');
    const inputname = (event) => {
    
        setName(event.target.value);
        console.log(event.target.value);
    }

  return (
    <>
    <div>
        <input type="text" onChange={inputname}></input>
    </div>
    <div>CHANGES:{name}</div>
    </>
  )
}

export default InputsOne
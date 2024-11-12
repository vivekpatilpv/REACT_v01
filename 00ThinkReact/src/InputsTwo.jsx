import { useState } from "react"


function InputsTwo() {

    const [fName, setFname] = useState('');
    const [LName, setLname] = useState('');

        const firstNameFun = (e) => {
        setFname(e.target.value)
        }

        const lastNameFun = (e) => {
        setLname(e.target.value)
        }

  return (

    <>
    <div>inputsTwo</div>
    <input type="text" onChange={firstNameFun} placeholder="First Name" />
      <input type="text" onChange={lastNameFun} placeholder="Last Name" />
      <div>{fName} {LName}</div>
    </>
    
  )
}

export default InputsTwo;
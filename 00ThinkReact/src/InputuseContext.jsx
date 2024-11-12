import React, { useContext } from "react"



const Theme =  React.createContext();



function ExerciseOne() {

    const mytheme = useContext(Theme);
    console.log(mytheme);

  return (
    <div>ExerciseOne</div>

  )
}




function ExerciseTwo() {
  return (
    <>

<div>ExerciseTwo</div>

    
    </>
  )
}


function InputuseContext() {
   return (
     <>
     <div >Input - useContext</div>     
 
     <Theme.Provider value="dark" >
         <ExerciseOne/>
     </Theme.Provider>

     <ExerciseTwo/>
 
     </>
     
   )
 }

 export default InputuseContext










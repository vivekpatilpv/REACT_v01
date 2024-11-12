
// import { useEffect } from 'react'



// function InputSix() {

//     useEffect(()=>{
//         const fetchdata = async () =>{
//             try{
//                 const apidata = await fetch('https://jsonplaceholder.typicode.com/posts')
//                 const data = await apidata.json();
//                 console.log(data)
//             }
//             catch(error){
//                 console.log("Error",error)
//             }
//         }
//         fetchdata();
//     },[])


//   return (
//     <div>InputSix</div>
//   )
// }

// export default InputSix




import { useEffect } from 'react'

function InputOne() {

useEffect(()=>{
    const apidata = async () =>{
        try{
            const data = await fetch("https://jsonplaceholder.typicode.com/posts")
            const fetcheddata = await data.json();
            console.log(fetcheddata)
        }
        catch(error){
            console.log("Error", error)
        }
    }
    apidata();
},[])


  return (
    <div>InputOne</div>
  )
}


function InputTwo() {
  return (
    <div>InputTwo</div>
  )
}




function InputSix() {
  return (
    <>
     <div><InputOne/></div>
    <div><InputTwo/></div>
    </>
   
  )
}


export default InputSix
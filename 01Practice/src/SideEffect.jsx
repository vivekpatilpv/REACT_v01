import React, { useEffect, useState } from 'react'

//   const Effectone = () => {

//     useEffect(()=>{
//         console.log("Hello World From UseEffect !");
//     },[])

//     return (<div> Hello World Again!</div>)
//   }


//   export default Effectone;
// Mock version of fakeFetch
const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: [
                    { id: 1, name: "Product 1" },
                    { id: 2, name: "Product 2" },
                    { id: 3, name: "Product 3" }
                ]
            });
        }, 1000);
    });
};

const ProductList = () => {

    const [lists,setLists] = useState([]);
    const [fetchData, setfetchData] = useState(false);

    const handleDataFetch = () =>{
        setfetchData(!fetchData)
    }

    useEffect(()=>{
        if(fetchData){
        fakeFetch("https://example.com/api/products")
        .then((response)=>{
            if(response.status === 200){
                setLists(response.data);
                console.log(response.data);
            }
        })
        .catch((error)=>{
            console.log("Error . Contact", error.message);
        }           
        );
    }
    },[fetchData]);

    return (
<>
<div>
    
    <h1>Product List</h1>
    <button onClick={handleDataFetch}>Fetch Data</button>
    <ol>
    {lists.map((list,index) => (<li key={index}>{list.name}</li>))}
    </ol>
</div>
</>

        
    );

};

export default ProductList;




import React from 'react'
import { useParams } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Product() {

    const {productId} = useParams();
    const products = [
        { id: 1, name: 'Product 1', description: 'Description for Product 1' },
        { id: 2, name: 'Product 2', description: 'Description for Product 2' },
        { id: 3, name: 'Product 3', description: 'Description for Product 3' },
      ];

  return (
    <>
    <div>
        <h1>Product Lists</h1>
        <ol>
        <Router>
            <Routes>
                <Route path='/id'></Route>
            {/* {products.map((p)=>(<li key={p.id}>{p.name}</li>))} */}
            </Routes>
        

        </Router>
        </ol>
    </div>
    </>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Sum from './Sum.jsx'
import Inputs from './Inputs.jsx'
// import Effectone from './SideEffect.jsx'
import ProductList from './SideEffect.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx'
import Product from './Product.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Sum num1={2} num2={3}/>
    <Inputs/> */}
    {/* <Effectone/> */}
    {/* <ProductList/> */}
    <Router>
      <nav>
        <Link to='/'>Homie</Link>
        <Link to='/Product'>TESTIES</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home/>}></Route>   
      <Route path="/Product" element={<Product/>}></Route>   
      </Routes>
    </Router>
    
  </StrictMode>,
)

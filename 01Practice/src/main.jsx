import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Sum from './Sum.jsx'
import Inputs from './Inputs.jsx'
// import Effectone from './SideEffect.jsx'
import ProductList from './SideEffect.jsx'
import Reducer from './Reducer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sum num1={2} num2={3}/>
    <Inputs/>
    {/* <Effectone/> */}
    <ProductList/>
  </StrictMode>,
)

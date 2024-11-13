import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EmployeeCard from './EmpCard.jsx'
import Sum from './Sum.jsx'
import Productx from './Productx.jsx'
import Fruits from './Fruits.jsx'
import Fruitscss from './Fruitscss.jsx'
import Employeecss from './Employeecss.jsx'
import Cart from './Cart.jsx'
import Counter from './Counter.jsx'
import InputsOne from './inputsOne.jsx'
import InputsTwo from './inputsTwo.jsx'
import InputThree from './InputThree.jsx'
import InputFour from './InputFour.jsx'
import InputFive from './InputFive.jsx'
import InputSix from './InputSix.jsx'
import InputuseContext from './InputuseContext.jsx'
// import NoobuseEffect from './NoobuseEffect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <EmployeeCard/>
    <Sum number1={2} number2={2}/>
    <Productx/>
    <Fruits/>
    <Fruitscss/>
    <Employeecss/>
    <Cart/>
    <Counter/>
    <InputsOne/>
    <InputsTwo/>
    <InputThree/>
    <InputFour/>
    <InputFive/>
    <InputSix/>

    <InputuseContext/>


    {/* <NoobuseEffect/> */}


    


   </StrictMode>,
)

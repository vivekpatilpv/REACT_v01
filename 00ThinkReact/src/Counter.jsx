import { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0);
  return (

    <>

<div>Counter</div>
<button style={{marginRight: "40px"}} onClick={()=>setCount(count+1)}>+</button>

<button onClick={()=>setCount(count-1)}>-</button>


<div>Value: {count}</div>
    </>
  )
}

export default Counter
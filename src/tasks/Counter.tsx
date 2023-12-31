import React, {useState} from 'react'

function Counter() {

    const [state, setState] = useState<number>(0);
    function addCount (){
       setState(state+1)
    }
    function minusCount (){
        setState(state-1)
     }
  return (
    <div>
        <h4>Counter</h4>
        <input/>
        <button onClick={()=>minusCount()}>-</button>
        <button onClick={()=>addCount()}>+</button>
        <div>{state}</div>
    </div>
  )
}

export default Counter
import React, {useState, ChangeEvent} from 'react'

function InputTask() {
  const [state, setState] = useState<string>('')
  function handleValue (event:ChangeEvent<HTMLInputElement>){
      setState(event.target.value)
  }
  return (
    <div>
          <h4>Input</h4>
          <input onChange={handleValue}/>
          <div>{state}</div>
    </div>
  )
}

export default InputTask
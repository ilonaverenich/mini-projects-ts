import React, {useState, ChangeEvent} from 'react';
import {Input} from 'antd'

function InputTask() {
  const [state, setState] = useState<string>('')
  function handleValue (event:ChangeEvent<HTMLInputElement>){
      setState(event.target.value)
  }
  return (
    <div>
          <h4>Input</h4>
          <Input className='input' onChange={handleValue}/>
          <div className='text'>{state}</div>
    </div>
  )
}

export default InputTask
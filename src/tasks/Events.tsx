import React,{ChangeEvent} from 'react';
import {Input} from 'antd'

const Events = () => {
    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
  return (
    <div>
        <b>Events</b> 
       <div> 
            <Input className='input' onChange={handleChange}/> 
       </div>

    </div>
  )
}

export default Events
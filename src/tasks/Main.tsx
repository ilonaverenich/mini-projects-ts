import React from 'react'
import PropsComponentTest from './PropsComponentTest'

const Main:React.FC = ()=> {
    const car ={
        model:'BMW',
        year:2022,
        price: 20000
    }
    const arr =[{name:'Vitya', age:30}, {name:'Katya', age:32}]
  return (
    <div>
        Типизированные пропсы
        <PropsComponentTest name='Ilona' age={28} car={car} arr={arr}/>

    </div>
  )
}

export default Main
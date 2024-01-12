import React from 'react'
type Props ={
    name:string,
    age:number
    car: Car,
    arr: Users[]
}
type Car={
    model:string,
    year:number,
    price: number
}
type Users ={
    name:string,
    age: number
}

const PropsComponentTest:React.FC<Props> =({name,age, car,arr})=> {
  return (
    <div>
        <p>Имя - <b>{name}</b> - переданная строка в пропсах </p>
        <p>Возраст- <b>{age}</b> - переданное число в пропсах </p>
        <p>Обьект был передан через пропсы:  <b>{car.model}</b> - <b>{car.price}$</b> - <b>{car.year}</b></p>
        <p>Массив обьектов: {arr.map((user, i)=><span><b>{i+1}. {user.name} {user.age}</b> </span>)}</p>
    
    </div>
  )
}

export default PropsComponentTest
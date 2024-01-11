import React from 'react'

interface Props {
    name:string,
    age:number,
    infoCar: InfoCar,
    users:Users[]
  }
  interface InfoCar{
    model: string,
    price: number,
    isSell: boolean
  }
  interface Users {
    name: string,
    surname: string,
    age: number
  }

const Test: React.FC<Props> =({name,age, infoCar, users}) =>{
  return (
    <div> 
        TEST PROPS
        <p>Props name: <b>{name}</b>, age: <b>{age}</b>, </p>
        Object
        <p>{infoCar.model}, {infoCar.price}$, {infoCar.isSell?'продается':'не продается'}</p>
        Array
        <div>{users.map(user=><div>
            <p>{user.name} {user.surname} - {user.age}</p>
        </div>)}</div>
    </div>
  )
}

export default Test
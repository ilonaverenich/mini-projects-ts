import React,{useState} from 'react'

const  StateTsComponent:React.FC = ()=> {
  /*   const arrayStr =['hi','how are you?','what are you doing now?', 'Busь'];

    function getInx(min:number, max:number):number{
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    function changeStr(){
       let num:number= getInx(1, arrayStr.length-1)
       console.log(num)
       setText(arrayStr[num])
    } */

    /* const [text, setText] = useState<string>('') */
    type UserType ={
        name:string,
        age:number,
        isAdmin:boolean
    }
    const user ={
        name:'Ilona',
        age:28,
        isAdmin:true
    }
    function addUser(){
        setPeople(user)
        console.log(people)
    }
    const [people, setPeople] = useState<UserType|null>(null)
  return (
    <div>
        Типизация <b>UseState</b>
        {/* <div>{text} <button onClick={()=>changeStr()}>клик</button></div> */}
        <div><button onClick={()=>addUser()}>Добавить пользователя</button></div>
        

    </div>
  )
}

export default StateTsComponent
import {Input, Button} from 'antd'

interface FormDataUser {
        login:string,
        password:string}


function Object(): JSX.Element {

  let obj:FormDataUser = {
    login: 'ilona',
    password: '123iii'
  }
    
  return (
    <div>
        <h4>Object</h4>
        <div>{obj.login}</div>
        <div>{obj.password}</div>
    </div>
  )
}

export default Object
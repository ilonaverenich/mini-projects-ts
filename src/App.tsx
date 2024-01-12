import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './tasks/Counter';
import InputTask from './tasks/InputTask';
import Test from './tasks/Test';
import Main from './tasks/Main';
import StateTsComponent from './tasks/StateTsComponent';

const App: React.FC= ()=> {

  const infoCar ={
    model: 'BMW',
    price: 200000,
    isSell: false
  }
  const users =[{
    name:'Ilona',
    surname:'Verenich',
    age:28
  },{
    name:'Zhenya',
    surname:'Khakholka',
    age:28
  }]
  return (
    <div className="App">
    {/*  <Counter/> */}
    {/* <InputTask/> */}
    {/* <Test name='Ilona' age={28} infoCar={infoCar} users={users}/> */}
    {/* <Main/>  */}
    <StateTsComponent/>
  
    </div>
  );
}

export default App;

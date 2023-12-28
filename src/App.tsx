import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './tasks/Counter';
import InputTask from './tasks/InputTask';
import Object from './tasks/Object';

function App() {
  return (
    <div className="App">
      <Counter/>
      <InputTask/>
      <Object/>
    </div>
  );
}

export default App;

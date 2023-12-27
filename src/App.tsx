import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './tasks/Counter';
import InputTask from './tasks/InputTask';

function App() {
  return (
    <div className="App">
      <Counter/>
      <InputTask/>
    </div>
  );
}

export default App;

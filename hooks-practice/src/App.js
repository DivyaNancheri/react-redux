import React from 'react';
import './App.css'
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import INC_DECHooksCounter from './Components/INC_DECHooksCounter';
import UseStateWithArray from './Components/UseStateWithArray';
import UseStateWithObject from './Components/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <UseStateWithArray />
      {/* <INC_DECHooksCounter/> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
// HookCounter -2 - useState Hook
// ClassCounter -2 - useState Hook
// INC_DECHooksCounter -3 - useState with previous state
// UseStateWithObject -4 - useState with object
// UseStateWithArray - 5 - useState with Array


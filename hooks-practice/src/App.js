import React from 'react';
import './App.css'
import ClassCounter from './Components/ClassCounter';
import ClassMouse from './Components/ClassMouse';
import ClassWithLifeCycle from './Components/ClassWithLifeCycle';
import DataFetching from './Components/DataFetching';
import HookCounter from './Components/HookCounter';
import HookMouse from './Components/HookMouse';
import INC_DECHooksCounter from './Components/INC_DECHooksCounter';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import MouseContainer from './Components/MouseContainer';
import UseEffectFunc from './Components/UseEffectFunc';
import UseStateWithArray from './Components/UseStateWithArray';
import UseStateWithObject from './Components/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <UseEffectFunc/> */}
      {/* <ClassWithLifeCycle /> */}
      {/* <UseStateWithArray /> */}
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
// ClassMouse, HookMouse - 9 - run effect only once=> did mount
// MouseContainer - 10 - cleanUP =>componentWillUnmount
// IntervalHookCounter, IntervalClassCounter - 11 - incorrect dependency
// DataFetching = 12, 13, 14 - data fetching with useeffect

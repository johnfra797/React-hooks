import React from 'react';
import logo from './logo.svg';
import './App.css';
import Focus from './components/Ref/Focus'
import HookTimer from './components/Ref/HookTimer'
import DocTitleOne from './components/Custom/DocTitleOne'
import CounterOne from './components/Custom/CounterOne'

import UserForm from './components/Custom/UserForm'
function App() {
  return (
    <div className="App">
      <Focus></Focus>
      <HookTimer></HookTimer>
      <DocTitleOne></DocTitleOne>
      <CounterOne></CounterOne>
      <UserForm></UserForm>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterOne from './components/Reducer/CounterOne'
import CounterTwo from './components/Reducer/CounterTwo'
import ComponentA from './components/Context/ComponentA'
export const UserContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Jhon Castillo0'}>
        <ComponentA></ComponentA>
      </UserContext.Provider>
      <CounterOne></CounterOne>
      <CounterTwo></CounterTwo>
    </div>
  );
}

export default App;

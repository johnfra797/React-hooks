import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterOne from './components/Reducer/CounterOne'
import CounterTwo from './components/Reducer/CounterTwo'
import CounterThree from './components/Reducer/CounterThree'
import ComponentA from './components/Context/ComponentA'
import Main from './components/Reducer/Context/Main'
import DataFetchingOne from './components/Reducer/DataFetchingOne'
import DataFetchingTwo from './components/Reducer/DataFetchingTwo'
export const UserContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Jhon Castillo0'}>
        <ComponentA></ComponentA>
      </UserContext.Provider>
      <CounterOne></CounterOne>
      <CounterTwo></CounterTwo>
      <CounterThree></CounterThree>
      <hr/>
      <Main></Main>
      <DataFetchingOne></DataFetchingOne>
      <DataFetchingTwo></DataFetchingTwo>
    </div>
  );
}

export default App;

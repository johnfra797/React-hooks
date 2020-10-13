import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/Context/ComponentA'

export const UserContext= React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Jhon Castillo0'}>
      <ComponentA></ComponentA>
      </UserContext.Provider>
    </div>
  );
}

export default App;

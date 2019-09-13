import React from 'react';
import Characters from './components/Characters';
import './App.css';

const App = () =>{
  return(
    <div className="appContainer">
      <h1>Meet the characters of Harry Potter!</h1>
      <Characters />
    </div>
  );
}

export default App;
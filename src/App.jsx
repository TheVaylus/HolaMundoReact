
import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className="app-title">Esta es mi primera app de React</h1>
      <div className="container">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    </div>
  );
};

export default App;

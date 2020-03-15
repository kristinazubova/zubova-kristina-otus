import React from 'react';
import Widget from './components/widget';
import './App.css';
import citiesData from './citiesData';

function App() {
  return (
    <div className="App">
      <h1 className="Title">Прогноз погоды</h1>
      <Widget cities={citiesData} />
    </div>
  );
}

export default App;

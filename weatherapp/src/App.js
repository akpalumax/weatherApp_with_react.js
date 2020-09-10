import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherFetch from "./weatherFetch.js"
function App() {
  return (
    <div className="App">
      <WeatherFetch/>
    </div>
  );
}

export default App;
// src/App.js
import React from 'react';
import data from './data';
import Card from './components/Card';
import './App.css';

const App = () => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default App;

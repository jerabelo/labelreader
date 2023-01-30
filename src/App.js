import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Timer from './Components/Timer'; 
import Header from './Components/Navbar';
import ImageUploader from './Components/Upload';
import Ingredients from './Components/Database';

function App() {
  return (
    <div className="App">
      <Header />
        <ImageUploader />
       <Timer />
       <Ingredients />


    </div>
  );
}

export default App;

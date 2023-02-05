import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Timer from './Components/Timer'; 
import Header from './Components/Navbar';
import read from './Components/reader';

import Ingredients from './Components/Database';
import FileUploadCard from './Components/Upload';
import Read from './Components/reader';
function App() {
  return (
    <div className="App">
      <Header />
      <FileUploadCard />
       <Timer />
       <Ingredients />
       <Read/>
    </div>
  );
}

export default App;

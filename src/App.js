import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Timer from './Components/Timer'; 
import Header from './Components/Navbar';



import FileUploadCard from './Components/Upload';

import IngredientsList from './Components/Database';
function App() {
  return (
    <div className="App">
      <Header />
      <FileUploadCard />
       <Timer />
       <IngredientsList />

    </div>
  );
}

export default App;

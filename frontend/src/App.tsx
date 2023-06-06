import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes> */}

      <Home></Home>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
import Products from './Components/pages/Products'
import SignUp from './Components/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path ='/'            element={<Home/>}/>
          <Route path ='/services'    element={<Services/>}/>
          <Route path ='/products'    element={<Products/>}/>
          <Route path ='/sign-up'     element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

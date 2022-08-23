import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';

import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing'
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

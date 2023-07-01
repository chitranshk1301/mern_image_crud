import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login';
import SignupForm from './pages/signup';
import Home from './pages/home';
import UserEnter from './pages/userEnter';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/"  exact element={<UserEnter />} />
          <Route path="/login"  element={<LoginForm />} /> 
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;

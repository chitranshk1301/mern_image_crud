import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login';
import SignupForm from './pages/signup';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/"  exact element={<Home />} />
          <Route path="/login"  element={<LoginForm />} /> 
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
    </div>
  );
}

export default App;

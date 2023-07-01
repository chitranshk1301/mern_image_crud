import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login';
import SignupForm from './pages/signup';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

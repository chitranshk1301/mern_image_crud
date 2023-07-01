import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = `${process.env.BASE_URL}/user`;

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios
      .post(`${url}`, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form className='h-screen flex flex-col gap-6 items-center pt-32'>
      <h1 className='text-gray text-4xl font-bold'>Sign Up</h1>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button variant="outlined" size="large" onClick={handleSignup}>Sign Up</Button>
        <p> Already have an account? <Link className='text-blue-500' to="/login">Login!</Link></p> 
      </form>
    </div>
  );
};

export default SignupForm;
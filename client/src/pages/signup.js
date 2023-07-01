import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const url = 'http://localhost:3000/user';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios
      .post(url, {
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
      <h1>Sign Up</h1>
      <form>
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
        <Button onClick={handleSignup}>Login</Button>
      </form>
      <p> Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignupForm;
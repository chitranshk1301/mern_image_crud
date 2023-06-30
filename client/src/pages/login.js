import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic, e.g., make an API request to your login endpoint
  };

  return (
    <form>
      <TextField
        label="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  );
};

export default LoginForm;

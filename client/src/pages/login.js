import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/signin';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post(url, {
            username: username,
            password: password
        })
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                console.log(localStorage.getItem('token'));

            })
            .catch((err) => {
                console.log(err);
            })
    };


    return (
        <div>
            <h1>Login</h1>
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
                <Button onClick={handleLogin}>Login</Button>
            </form>
        </div>
    );
};

export default LoginForm;

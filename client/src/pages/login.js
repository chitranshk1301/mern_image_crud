import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
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
            <form className='h-screen flex flex-col gap-6 items-center pt-32'>
                <h1 className='text-gray text-4xl font-bold'>Login</h1>
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
                <Button variant="outlined" size="large" onClick={handleLogin}>Login</Button>
                <p>Don't have an account? <Link className='text-blue-500' to="/signup">Sign-Up!</Link></p>
            </form>
        </div>
    );
};

export default LoginForm;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logout from '../utils/logout';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setInterval(() => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(token !== null);
        }, 1000);
    }, []);

    const handleLogout = () => {
        logout();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home">Images CRUD app</Link>
                    </Typography>
                    {isAuthenticated ? (
                        <Button variant='outlined' color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <Button variant='filled' href='/login'>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
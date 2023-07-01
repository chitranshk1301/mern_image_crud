import React from 'react'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

const UserEnter = () => {
    return (
        <div>
            <div className='h-screen flex flex-col items-center pt-32'>
                <h1 className='text-gray text-4xl font-bold'>Welcome!</h1>
                <h2 className='text-2xl pt-4'>Click on the Login or Signup button to get started!</h2>

                <div className='flex items-center pt-10'>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item><Button variant="contained" href="/login">Login</Button></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><Button variant="contained" href="/signup">Signup</Button></Item>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}

export default UserEnter
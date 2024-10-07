import React from 'react'
import { AppBar, Avatar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import Logo from "../assets/Logo.png"

const Header = () => {
    return (
        <div className='bg-light'>
            <AppBar position="static" sx={{ backgroundColor: "#f5f5f5" }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
                        <Box>
                            <img src={Logo} alt="logo" srcset="" />
                        </Box>

                        <Box sx={{display:"flex",}}>
                            <Link href="#" underline="none"  className='mx-3 text-dark'>
                                <Typography variant='body1'>Home</Typography>
                            </Link>
                            <Link href="#" underline="none"  className='mx-3 text-dark'>
                                <Typography variant='body1'>Service</Typography>
                            </Link>
                            <Link href="#" underline="none"  className='mx-3 text-dark'>
                                <Typography variant='body1'>Feature</Typography>
                            </Link>
                            <Link href="#" underline="none"  className='mx-3 text-dark'>
                                <Typography variant='body1'>Product</Typography>
                            </Link>
                            <Link href="#" underline="none"  className='mx-3 text-dark'>
                                <Typography variant='body1'>Testimonial</Typography>
                            </Link>
                            <Link href="#" underline="none"  className='mx-3 text-dark'>
                                <Typography variant='body1'>faQ</Typography>
                            </Link>
                            
                        </Box>
                        <Box>
                        <Button sx={{color:"#4caf4f"}}>Login</Button>
                        <Button variant="contained" sx={{backgroundColor:"#4caf4f"}}>Signup</Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header
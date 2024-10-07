import { Box, Button, Typography } from '@mui/material'
import Banner from "../assets/Illustration.png"
import React from 'react'

const HeroSection = () => {
    return (
        <Box className="container my-5 py-5">
            <Box className="row">
                <Box className="col-md-7 col-xs-12 my-5 d-flex align-items-start flex-column justify-content-center">
                    <Typography className='fw-bold text-secondary ' variant='h2'>Lessons and insights </Typography>
                    <Typography variant='h3' sx={{color:"#4caf4f", margin:"5px 0px", fontWeight:"bold" }}>from 8 years </Typography>
                    <Typography variant='body2' sx={{color:"#717171", margin:"20px 0px"}}>Where to grow your business as a photographer: site or social media?</Typography>
                    <Box>
                        <Button variant="contained"  sx={{backgroundColor:"#4caf4f"}}>Register</Button>
                    </Box>
                </Box>
                <Box className="col-md-5 col-xs-12 my-5 text-center">
                    <img src={Banner} alt="Banner" srcset="" />
                </Box>
            </Box>
        </Box>
    )
}

export default HeroSection
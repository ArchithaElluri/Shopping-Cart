import React, { useState } from 'react'
import sideImage from "../assets/Side Image.png"
import { Box, Button, Input, Typography } from '@mui/material'
import googleIcon from "../assets/Icon-Google.png"
import Nav from './Nav'
import Footer from '../homecomponent/Footer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SignUp() {
    const [login, setLogin] = useState(false)
  return (
    <Box sx={{justifyContent:"center", alignItems:"center", display:"flex", width:"100%", flexDirection:"row", marginTop:"50px", marginBottom:"100px"}}>
        <Box sx={{width:"50%"}}>
        <img src={sideImage} alt='side image for login' width={"700px"} height={"500px"}/>
        </Box>
        {!login ? (
            <Box sx={{justifyContent:"center",width:"50%", alignContent:"center", display:"flex", flexDirection:"column", gap:"15px", marginLeft:"80px"}}>
            <Box sx={{justifyContent:"center",width:"60%", alignContent:"center", display:"flex", flexDirection:"column",gap:"15px"}}>
                <div>
                <h1 style={{textAlign:"left"}}>Create an account</h1>
                <p style={{textAlign:"left"}}>Enter your details below</p>
                </div>
            <Input placeholder='Name'/>
            <Input placeholder='Email or Phone Number'/>
            <Input placeholder='Password'/>
            <Button sx={{bgcolor:"rgba(219, 68, 68, 1)",textTransform:"capitalize", color:"white"}}> Create Account </Button>
            <Button variant='outlined' sx={{textTransform:"none", borderColor:"rgba(0, 0, 0, 0.4)", color:"black"}}><img src={googleIcon} alt='google Icon' width={"20px"} height={"20px"} style={{marginRight:"10px"}}/> Signup with Google</Button>
            <Typography>Already have account? <a href='#' onClick={()=>setLogin(true)}>Login</a></Typography>
        </Box>
        </Box>
        ) : (
            <Box sx={{justifyContent:"center",width:"50%", alignContent:"center", display:"flex", flexDirection:"column", gap:"15px", marginLeft:"80px"}}>
            <Box sx={{justifyContent:"center",width:"60%", alignContent:"center", display:"flex", flexDirection:"column",gap:"15px"}}>
                <div>
                <h1 style={{textAlign:"left"}}>Log in to Exclusive</h1>
                <p style={{textAlign:"left"}}>Enter your details below</p>
                </div>
            <Input placeholder='Email or Phone Number'/>
            <Input placeholder='Password'/>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <Button sx={{bgcolor:"rgba(219, 68, 68, 1)",textTransform:"capitalize", color:"white", }}> Log in </Button>
            <Button sx={{textTransform:"none", borderColor:"rgba(0, 0, 0, 0.4)", color:"rgba(219, 68, 68, 1)"}}> Forget Password?</Button>
           </Box>
        </Box>
        </Box>
        )}
            </Box>
          
  )
}

export default SignUp
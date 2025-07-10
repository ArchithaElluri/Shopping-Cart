import { Box, Divider, Input,Typography } from '@mui/material'
import React from 'react'
import ScannerImage from "../assets/scanGoogApple.png"
import linkdln from "../assets/Icon-Linkedin.png"
import facebook from "../assets/Icon-Facebook.png"
import instagram from "../assets/icon-instagram.png"
import twitter from "../assets/Icon-Twitter.png"
import { SendButton } from '../assets/Icons'

function Footer() {
  return (
    <div>
      <Box sx={{display:"flex", listStyleType:"none",justifyContent:"space-around", width:"100%"}}>
      <ul style={{listStyleType:"none",textAlign:"left", cursor:"pointer"}}>
          <li><h3>Exclusive</h3></li>
          <li  style={{paddingBottom:"10px", fontWeight:"bold"}}>Subscribe</li>
          <li  style={{paddingBottom:"10px"}}>Get 10% off your first order</li>
          <li  style={{paddingBottom:"10px"}}>
          <Box sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '180px', paddingRight: '12px', borderRadius: '5px', border: 'none',
                    height: '40px',
                    bgcolor: 'black', border:"1px solid grey"
                }}>
                    <Input placeholder='Enter Your Email' disableUnderline
                        sx={{ width: '160px', border: 'none', height: '30px', color:"white",paddingLeft: '8px', '&::before, &::after': { display: 'none' }, }} />
                    <SendButton style={{ width: '20px', height: '20px' }} />
                </Box>
          </li>
        </ul>
        <ul style={{listStyleType:"none",textAlign:"left", cursor:"pointer"}}>
          <li><h4>Support</h4></li>
          <li>111 Bijoy sarani, Dhaka, <br/>DH 1515, Bangladesh.</li>
          <br/>
          <li>exclusive@gmail.com</li>
          <br/>
          <li>+88015-88888-9999</li>
        </ul>
        <ul style={{listStyleType:"none",textAlign:"left", paddingBottom:"10px", cursor:"pointer"}}>
          <li><h4>Account</h4></li>
          <li style={{paddingBottom:"10px"}}>My Account</li>
          <li style={{paddingBottom:"10px"}}>Login / Register</li>
          <li style={{paddingBottom:"10px"}}>Cart</li>
          <li style={{paddingBottom:"10px"}}>Wishlist</li>
          <li style={{paddingBottom:"10px"}}>Shop</li>

        </ul>
        <ul style={{listStyleType:"none",textAlign:"left", cursor:"pointer"}}>
          <li><h4>Quick Link</h4></li>
          <li style={{paddingBottom:"10px"}}>Privacy Policy</li>
          <li style={{paddingBottom:"10px"}}>Terms Of Use</li>
          <li style={{paddingBottom:"10px"}}>FAQ</li>
          <li style={{paddingBottom:"10px"}}>Contact</li>
        </ul>
        <ul style={{listStyleType:"none",textAlign:"left", cursor:"pointer"}}>
          <li><h4>Download App</h4></li>
          <li style={{paddingBottom:"10px"}}>Save $3 with App Now User Only</li>
          <li style={{paddingBottom:"10px"}}><img src={ScannerImage} alt='scaner google and app store' /></li>
          <li style={{paddingBottom:"10px"}}>
            <ul style={{listStyleType:"none", display:"flex", justifyContent:"space-between",paddingInlineStart:0}}>
              <li><img src={facebook} alt='facebook icon' /></li>
              <li><img src={twitter} alt='twitter Icon'/></li>
              <li><img src={instagram} alt='instagram icon'/></li>
              <li><img src={linkdln} alt='linkedin' /></li>
            </ul>
          </li>
        </ul>
      </Box>
      <Divider sx={{color:"grey", opacity:"10%", border:'0.1px solid grey'}} />
      <Typography sx={{color:"rgba(255, 255, 255, 1)", fontSize:"12px", alignItems:"center", padding:"10px", opacity:"20%", justifyContent:"center", display:"flex"}}> @ Copyright Rimel 2022. All right reserved</Typography>
      
    </div>
  )
}

export default Footer
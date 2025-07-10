import { Box, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import searchIcon from "../assets/search.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cartIcon from "../assets/Cart1.png"
import account from "../assets/user.png"
import account_red from "../assets/user_red.png"

function NavBar() {
    const [clicked, setClicked] = useState(false)

    return (
        <Box sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", width: "100%" }}>
            <h2>Exclusive</h2>
            <Box>
                <ul style={{ justifyContent: "space-around", fontWeight: 600, display: "flex", flexDirection: "row", alignItems: "center", width: "100%", listStyleType: "none" }}>
                    <li style={{ margin: "10px" }}>Home</li>
                    <li style={{ margin: "10px", textDecoration:"none" }}>Contact</li>
                    <li style={{ margin: "10px" }}>About</li>
                    <li style={{ margin: "10px" }}>Sign Up</li>
                </ul>
            </Box>
            <Box sx={{justifyContent:"space-around", display:"flex", alignItems:"center", flexDirection:"row", marginRight:"10px"}}>        
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '240px', paddingRight: '12px', borderRadius: '5px', border: 'none',
                height: '40px',
                bgcolor: 'rgba(245, 245, 245, 1)'
            }}>
                <Input placeholder='What are you looking for?' disableUnderline
                    sx={{ width: '220px', border: 'none', height: '30px', paddingLeft: '8px', '&::before, &::after': { display: 'none' }, }} />
                <img src={searchIcon} alt='searchIcon' style={{ width: '20px', height: '20px' }} />
            </Box>
            <FavoriteBorderIcon />
            <img src={cartIcon} alt='cart' />
            <img src={clicked? account_red : account} onClick={()=>setClicked(!clicked)} alt='account' style={{cursor:"pointer"}} />

            
            </Box>
        </Box>
    )
}

export default NavBar
import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Divider, Typography } from '@mui/material';
import Footer from '../Footer';
import Nav from '../../auth/Nav';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Styles } from './Styles';

function Main() {
 


  return (
    <Box sx={Styles.Main}>
     <Box sx={{ bgcolor: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between",width:"100%" }}>
  <Typography sx={{ fontSize: "14px", padding: "8px", flexGrow: 1, textAlign: "center" }}>
    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a style={{ textDecoration: "underline" }}>ShopNow</a>
  </Typography>
  <Typography sx={{ fontSize: "14px", padding: "5px", position:"relative",marginRight:"30px", alignItems:"center", justifyContent:"center", display:"flex" }}>
    English <KeyboardArrowDownIcon/>
  </Typography>
</Box>



      <Nav />
      <Divider />

      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", minHeight: "80vh" }}>
        
                  <Outlet />

       
      </Box>
      <Box sx={{ bgcolor: "black", color: "white" }}>
        <Footer />
      </Box>

    </Box>
  );
}

export default Main;

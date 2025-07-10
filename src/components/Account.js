import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

function Account() {
  return (
    <Box sx={{ padding: '20px', width: '85%', margin: 'auto' }}>
      <Typography sx={{  marginBottom: '3%', marginTop:"3%" }}>
        <span style={{opacity:"50%"}}>  Home / </span>My Account
      </Typography>
      <Typography sx={{color:"black", justifyContent:"flex-end", display:"flex", marginBottom:"20px"}}>Welcome   <span style={{color: 'rgba(219, 68, 68, 1)', marginLeft:"5px"}}> Md Rimel</span></Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
        <Box sx={{ flex: { xs: '1', md: '0.3' } }}>
          <Typography variant="h6">Manage My Account</Typography>
          <ul style={{ listStyleType: 'none'}}>
            <li style={{ color: 'rgba(219, 68, 68, 1)', fontWeight: 500 }}>My Profile</li>
            <li style={{ opacity: '0.6' }}>Address Book</li>
            <li style={{ opacity: '0.6' }}>My Payment Options</li>
          </ul>

          <Typography variant="h6" sx={{ marginTop: '20px' }}>My Orders</Typography>
          <ul style={{ listStyleType: 'none', opacity: '0.6' }}>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>

          <Typography variant="h6" sx={{ marginTop: '20px' }}>My Wishlist</Typography>
        </Box>

        <Box
          sx={{
            flex: { xs: '1', md: '0.7' },
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '30px', color: 'rgba(219, 68, 68, 1)' }}>
            Edit Your Profile
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography>First Name</Typography>
              <TextField
                required
                variant="standard"
                placeholder="Md"
                sx={{
                  bgcolor: 'rgba(245, 245, 245, 1)',
                  height: '50px',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    padding: '15px 10px',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography>Last Name</Typography>
              <TextField
                variant="standard"
                placeholder="Rimel"
                sx={{
                  bgcolor: 'rgba(245, 245, 245, 1)',
                  height: '50px',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    padding: '15px 10px',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography>Email</Typography>
              <TextField
                required
                variant="standard"
                placeholder="rimel1111@gmail.com"
                sx={{
                  bgcolor: 'rgba(245, 245, 245, 1)',
                  height: '50px',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    padding: '15px 10px',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography>Address</Typography>
              <TextField
                variant="standard"
                placeholder="Kingston, 5236, United States"
                sx={{
                  bgcolor: 'rgba(245, 245, 245, 1)',
                  height: '50px',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    padding: '15px 10px',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
          </Box>

          <Typography>Password Changes</Typography>
          <TextField
            variant="standard"
            placeholder="Current Password"
            sx={{
              bgcolor: 'rgba(245, 245, 245, 1)',
              width: '100%',
              marginBottom: '10px',
              '& .MuiInputBase-input': {
                padding: '10px',
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <TextField
            variant="standard"
            placeholder="New Password"
            sx={{
              bgcolor: 'rgba(245, 245, 245, 1)',
              width: '100%',
              marginBottom: '10px',
              '& .MuiInputBase-input': {
                padding: '10px',
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <TextField
            variant="standard"
            placeholder="Confirm New Password"
            sx={{
              bgcolor: 'rgba(245, 245, 245, 1)',
              width: '100%',
              marginBottom: '20px',
              '& .MuiInputBase-input': {
                padding: '10px',
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Button sx={{ color: 'black', textTransform: 'capitalize' }}>Cancel</Button>
            <Button
              sx={{
                bgcolor: 'rgba(219, 68, 68, 1)',
                textTransform: 'capitalize',
                color: 'white',
                padding: '10px 20px',
                '&:hover': {
                  bgcolor: 'rgba(219, 68, 68, 0.9)',
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{height:"15vh"}}></Box>
    </Box>
  );
}

export default Account;

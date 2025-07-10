import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import React from 'react';
import call from "../assets/icons-phone.png"
import mail from "../assets/icons-mail.png"


function Contact() {
  return (
    <Box sx={{ padding: '20px' }}>
      <div style={{ justifyContent: 'flex-start', display: 'flex', width: '100%' }}>
        <Typography sx={{ marginTop: '20px' }}>Home / Contact</Typography>
      </div>
      <Box sx={{
        display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', alignItems: 'flex-start', width: '100%',
        gap: '20px',
        marginTop: '20px',
      }}>
        <Box
          sx={{
            display: 'flex',
            gap: '7px',
            flexDirection: 'column',
            padding: '20px',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
            textAlign: 'left',
            width: { xs: '100%', md: '25%' },
          }}
        >
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={call} alt="Call Icon" style={{ marginRight: '8px' }} />
            Call To Us
          </Typography><br/>
          <Typography>We are available 24/7, 7 days a week.</Typography>
          <Typography>Phone: +8801611112222</Typography>

          <Divider sx={{ marginY: '16px' }} />

          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={mail} alt="Mail Icon" style={{ marginRight: '8px' }} />
            Write To Us
          </Typography><br/>
          <Typography>
            Fill out our form and we will contact you within 24 hours.
          </Typography>
          <Typography>Emails: customer@exclusive.com</Typography>
          <Typography>Emails: support@exclusive.com</Typography>

        </Box>

        <Box
          sx={{
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
            padding: '20px',
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            <TextField
              required

              variant="standard"
              placeholder="Your Name*"
              sx={{
                bgcolor: 'rgba(245, 245, 245, 1)',
                height: '50px',
                width: '100%',
                '& .MuiInputBase-input': {
                  padding: '15px 10px',
                  lineHeight: '20px',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'gray',
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              variant="standard"
              placeholder="Your Email*"
              sx={{
                bgcolor: 'rgba(245, 245, 245, 1)',
                height: '50px',
                width: '100%',
                '& .MuiInputBase-input': {
                  padding: '15px 10px',
                  lineHeight: '20px',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'gray',
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              variant="standard"
              placeholder="Your Phone*"
              sx={{
                bgcolor: 'rgba(245, 245, 245, 1)',
                height: '50px',
                width: '100%',
                '& .MuiInputBase-input': {
                  padding: '15px 10px',
                  lineHeight: '20px',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'gray',
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>

          <TextField
            variant="standard"
            placeholder="Your Message*"
            multiline
            rows={6}
            sx={{
              bgcolor: 'rgba(245, 245, 245, 1)', width: '100%', marginBottom: '20px',
              '& .MuiInputBase-input': {
                padding: '10px',
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Button sx={{ bgcolor: "rgba(219, 68, 68, 1)", textTransform: "capitalize", color: "white", justifySelf:"flex-end", padding:"10px", display:"flex" }}>
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;

import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import side_image from "../assets/image_about.png"
import image1 from "../assets/image1.svg"
import image2 from "../assets/image2.svg"
import image3 from "../assets/image3.svg"
import twitter from "../assets/Icon-Twitter.png"
import instagram from "../assets/icon-instagram.png"
import linkdein from "../assets/Icon-Linkedin.png"
import { StoreIcon, MonthlySale, CustomerActive, AnnualGross, Instagram, Linkdein, Twitter, Delivery, CustomerSupport, MoneyGuarantee } from '../assets/Icons'
import { Carousel } from 'react-responsive-carousel'
import { red } from '@mui/material/colors'

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index)
  }

  return (
    <Box sx={{ padding: '10px', width:{ xs:"100%", lg:"80%", sm:"100%", md:"80%"} }}>
      <div style={{ justifyContent: 'flex-start', display: 'flex', width: '100%' }}>
        <Typography sx={{ marginBottom: '3%', marginTop: "3%" }}>
          <span style={{ opacity: "50%" }}>  Home / </span>About
        </Typography>      </div>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Box sx={{ textAlign: "left", width: "auto", marginRight: "40px" }}>
          <Typography variant='h3'>Our Story</Typography>
          <p>Launced in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </Box>
        <Box>
          <img src={side_image} alt='about side image' />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px", p: 2 }}>

        <Box
          sx={{
            width: { xs: "100%", sm: "270px" },
            height: "230px",
            margin: { xs: "5px", sm: "10px" },
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "5px",
            '&:hover, &:active': {
              bgcolor: "rgba(219, 68, 68, 1)",
              color: "white",
              // border:"0px", 
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
            },

          }}
        >
          <StoreIcon />
          <Typography variant='h4'>10.5k</Typography>
          <Typography sx={{ fontSize: "16px" }}>Sellers active on our site</Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "270px" },
            height: "230px",
            margin: { xs: "5px", sm: "10px" },
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "5px",
            '&:hover, &:active': {
              bgcolor: "rgba(219, 68, 68, 1)",
              color: "white",
              // border:"none", 
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
            },

          }}
        >
          <MonthlySale />
          <Typography variant='h4'>33k</Typography>
          <Typography sx={{ fontSize: "16px" }}>Monthly Product Sale</Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "270px" },
            height: "230px",
            margin: { xs: "5px", sm: "10px" },
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            justifyContent: "center",
            textAlign: "center",
            '&:hover, &:active': {
              bgcolor: "rgba(219, 68, 68, 1)",
              color: "white",
              // border:"none", 
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
            },

          }}
        >
          <CustomerActive />
          <Typography variant='h4'>45.5k</Typography>
          <Typography sx={{ fontSize: "16px" }}>Customer active on our site</Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "270px" },
            height: "230px",
            margin: { xs: "5px", sm: "10px" },
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            textAlign: "center",
            '&:hover, &:active': {
              bgcolor: "rgba(219, 68, 68, 1)",
              color: "white",
              // border:"none", 
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
            },

          }}
        >
          <AnnualGross />
          <Typography variant='h4'>25k</Typography>
          <Typography sx={{ fontSize: "16px" }}>Annual gross sale on our site</Typography>
        </Box>

      </Box>
      <Box 
  sx={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    p: 5, 
    m: 10, 
    height: "800px", 
    position: "relative"
  }}>
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showIndicators={true}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
    onChange={handleSlideChange}
    centerMode={true}
    centerSlidePercentage={40}
    renderIndicator={(onClickHandler, isSelected, index, label) => {
      const style = {
        background: isSelected ? '#000' : '#ccc',
        width: 12,
        height: 12,
        borderRadius: '50%',
        display: 'inline-block',
        margin: '0 8px',
        cursor: 'pointer'
      };
      return (
        <li
          style={style}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`Slide ${label}`}
        />
      );
    }}
  >
    {[ 
      { name: "Tom Cruise", title: "Founder & Chairman", image: image1 },
      { name: "Emma Watson", title: "Managing Director", image: image2 },
      { name: "Will Smith", title: "Product Designer", image: image3 }
    ].map((person, index) => (
      <Box
        key={index}
        sx={{
          transform: currentIndex === index ? "scale(1.2)" : "scale(1)",
          transition: "transform 0.5s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "600px",
        }}
      >
        <img src={person.image} alt={`image${index + 1}`} width={"500px"} height={"480px"} />
        <Typography variant='h4'>{person.name}</Typography>
        <Typography>{person.title}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2, gap: 2 }}>
          <Twitter />
          <Instagram />
          <Linkdein />
        </Box>
      </Box>
    ))}
  </Carousel>

  {/* Indicators positioned below the carousel */}
  <Box 
    sx={{
      position: "absolute", 
      bottom: "20px", 
      left: "50%", 
      transform: "translateX(-50%)", 
      display: "flex", 
      justifyContent: "center", 
      gap: 2
    }}
  >
    {/* Carousel's built-in indicators will render here */}
  </Box>
</Box>


      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
          p: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Delivery />
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", marginTop: "30px" }}>FREE AND FAST DELIVERY</Typography>
          <Typography sx={{ fontSize: "14px" }}>Free delivery for all orders over $140</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CustomerSupport />
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", marginTop: "30px" }}>24/7 CUSTOMER SERVICE</Typography>
          <Typography sx={{ fontSize: "14px" }}>Friendly 24/7 customer support</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <MoneyGuarantee />
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", marginTop: "30px" }}>MONEY BACK GUARANTEE</Typography>
          <Typography sx={{ fontSize: "14px" }}>We return money within 30 days</Typography>
        </Box>
      </Box>


    </Box>

  )
}

export default About
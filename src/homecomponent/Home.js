import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Divider, Rating, Typography } from '@mui/material'
import homeImage from "../assets/homeImage.png"
import homeImageOne from "../assets/homeImageone.svg"
import homeImagetwo from "../assets/imagehomeTwo.svg"
import MyCountdown from './coundown/Coundown';
import { Delivery, CustomerSupport, MoneyGuarantee, Mobile, Computers, SmartWatch, Camera, HeadPhones, Gaming, RedRectangle, LeftArrow, RightArrow, FillHeartIcon, FillEyeIcon, CartWhite } from '../assets/Icons'
import { useNavigate } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import slider_one from "../assets/slider_one.png"
import slider_two from "../assets/slider_two.png"
import slider_three from "../assets/slider_three.png"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { cartContext } from '../App'

function Home() {
  const [products, setProducts] = useState([])
  const { setCartItems, setWishlist } = useContext(cartContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);


  const handleClickCart = (product) => {
    console.log("cartItem click", product);

    setCartItems(prev => {
      const updatedCart = [...prev, product];
      console.log("total array of cartItems", updatedCart);
      return updatedCart;


    })
  };
  const handleClickWishlist = (product) => {
    console.log("cartItem click", product)

    setWishlist(prev => {
      const updatedWishlist = [...prev, product]
      console.log("total array of cartItems", updatedWishlist)
      return updatedWishlist


    })
  };



  return (
    <Box sx={{ width: "83%" }}>

      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: "62vh", alignItems: "center", marginBottom: "5%" }}>
        <Box sx={{ width: "25%", justifyContent: "flex-start" }}>
          <ul style={{ listStyleType: "none", fontSize: "18px", }}>
            <li style={{ alignItems: "center", display: "flex", gap: "50px", cursor: "pointer" }}>Woman's Fashion<ChevronRightIcon /></li>
            <li style={{ alignItems: "center", display: "flex", gap: "75px", cursor: "pointer" }}>Men's Fashion<ChevronRightIcon /></li>
            <li style={{ cursor: "pointer" }}>Electronics</li>
            <li style={{ cursor: "pointer" }}>Home & LifeStyle</li>
            <li style={{ cursor: "pointer" }}>Medicine</li>
            <li style={{ cursor: "pointer" }}>Sports & Outdoor</li>
            <li style={{ cursor: "pointer" }}>Baby's & Toys</li>
            <li style={{ cursor: "pointer" }}>Groceries & Pets</li>
            <li style={{ cursor: "pointer" }}>Health & Beauty</li>
          </ul>

        </Box>
        <Divider orientation="vertical" />
        <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex", width: "100%", marginLeft: "30px", marginTop: "5%" }}>
          <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showIndicators={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
          >
            <Box sx={{ width: "90%" }}>
              <img src={homeImage} alt='Home Image' width={"100%"} height={"auto"} />
            </Box>
            <Box sx={{ width: "90%" }}>
              <img src={slider_one} alt='Slider One' width={"100%"} height={"auto"} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <img src={slider_two} alt='Slider Two' width={"100%"} height={"auto"} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <img src={slider_three} alt='Slider Three' width={"100%"} height={"auto"} />
            </Box>
          </Carousel>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          <RedRectangle sx={{ margin: "10px" }} />
          <Typography sx={{
            color: "rgba(219,68,68,1)", fontWeight: 600, borderRadius: "2px"
            , display: "flex", textAlign: "center",
            alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: "15px"
          }}>Today's</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <Typography variant='h4' sx={{ fontWeight: 600, padding: "0px 20px 20px 0px", margin: "20px 30px 30px 0px" }}>Flash Sales</Typography>
            <MyCountdown />
          </Box>
          <Typography sx={{ display: "flex", flexDirection: "row", gap: "10px" }}><LeftArrow /><RightArrow /></Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          mt: 2,
          width: "100%",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        }}>
          {products.map(product => (
            <Box key={product.id} sx={{
              width: "280px",
              textAlign: "center",
              m: 1,
              position: "relative",

            }}>
              <Box sx={{
                position: "relative",
                width: "280px",
                height: "250px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                bgcolor: "rgba(245, 245, 245, 1)",
                borderRadius: "4px",
                "&:hover .addToCart": {
                  display: "flex"
                }
              }}>
                <img
                  src={product.image}
                  style={{ width: "50%", height: "auto", maxHeight: 200 }}
                />

                <Box sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: "50px",
                  height: "30px",
                  bgcolor: "red",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold"
                }}>
                  -30%
                </Box>

                <Box sx={{
                  position: "absolute",
                  bottom: 150,
                  right: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  gap: 1
                }}>
                  <Typography onClick={() => handleClickWishlist(product)}>
                    <FillHeartIcon
                      variant="outlined"
                      sx={{
                        color: "black",
                        cursor: "pointer"
                      }}
                    />
                  </Typography>

                  <Typography sx={{ cursor: "pointer" }}
                    onClick={() => navigate('/ProductDetails', { state: { product } })}>
                    <FillEyeIcon />
                  </Typography>
                </Box>
                <Box className="addToCart" sx={{
                  position: "absolute",
                  justifyContent: "center",
                  top: 220,
                  alignItems: "center",
                  padding: "5px 0px",
                  bgcolor: "black",
                  width: "100%",
                  color: "white",
                  opacity: "80%",
                  display: "none",
                  gap: "10px",
                  cursor: "pointer"
                }}
                  onClick={() => handleClickCart(product)}>
                  {/* <CartWhite /> */}
                  Add to Cart
                </Box>
              </Box>

              <Typography>{product.title}</Typography>

              <Typography sx={{ color: "rgba(219,68,68,1)" }}>
                $ {product.price}
              </Typography>

              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
            </Box>
          ))}
        </Box>


        <Box sx={{ display: "flex", justifyContent: "center", }}>
          <Button sx={{ bgcolor: "rgba(219, 68, 68, 1)", textTransform: "capitalize", color: "white", padding: "10px", marginTop: "40px" }}>View All Products</Button>
        </Box>
        <Divider sx={{ margin: "30px" }} />
        <Box sx={{ display: "flex" }}>
          <RedRectangle sx={{ margin: "10px" }} />
          <Typography sx={{
            color: "rgba(219,68,68,1)", fontWeight: 600, borderRadius: "2px"
            , display: "flex", textAlign: "center",
            alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: "15px"
          }}>Categories</Typography>

        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant='h4' sx={{ fontWeight: 600, padding: "0px 20px 20px 0px", margin: "20px 30px 30px 0px" }}>Browse By Category</Typography>
          <Typography sx={{ display: "flex", flexDirection: "row", gap: "10px" }}><LeftArrow /><RightArrow /></Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px", p: 2 }}>

          <Box
            sx={{
              width: { xs: "100%", sm: "170px" },
              height: "145px",
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
                cursor: "pointer",
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
              },

            }}
          >
            <Mobile />
            <Typography sx={{ fontSize: "16px" }}>Phone</Typography>

          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "170px" },
              height: "145px",
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
                cursor: "pointer",
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
              },

            }}
          >
            <Computers />
            <Typography sx={{ fontSize: "16px" }}>Computers</Typography>

          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "170px" },
              height: "145px",
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
                cursor: "pointer",
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
              },

            }}
          >
            <SmartWatch />
            <Typography sx={{ fontSize: "16px" }}>Smart watch</Typography>

          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "170px" },
              height: "145px",
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
                cursor: "pointer",
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
              },

            }}
          >
            <Camera />
            <Typography sx={{ fontSize: "16px" }}>Camera</Typography>

          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "170px" },
              height: "145px",
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
                cursor: "pointer",
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
              },

            }}
          >
            <HeadPhones />
            <Typography sx={{ fontSize: "16px" }}>Head Phones</Typography>

          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "170px" },
              height: "145px",
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
                cursor: "pointer",
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
              },

            }}
          >
            <Gaming />
            <Typography sx={{ fontSize: "16px" }}>Gaming</Typography>

          </Box>

        </Box>

      </Box>
      <Divider sx={{ margin: "30px" }} />

      <Box>
        <Box sx={{ display: "flex" }}>
          <RedRectangle sx={{ margin: "10px" }} />
          <Typography sx={{
            color: "rgba(219,68,68,1)", fontWeight: 600, borderRadius: "2px"
            , display: "flex", textAlign: "center",
            alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: "15px"
          }}>This Month</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h4' sx={{ fontWeight: 600, padding: "0px 20px 20px 0px", margin: "20px 30px 30px 0px" }}>Best Selling Products</Typography>
          <Button sx={{ bgcolor: "rgba(219, 68, 68, 1)", textTransform: "capitalize", color: "white", height: "50px", padding: "20px" }}>View All</Button>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          mt: 2,
          width: "100%",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        }}>
          {products.slice(8, 12).map(product => (
            <Box key={product.id} sx={{
              width: "280px",
              textAlign: "center",
              m: 1,
              position: "relative",

            }}>
              <Box sx={{
                position: "relative",
                width: "280px",
                height: "250px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                bgcolor: "rgba(245, 245, 245, 1)",
                borderRadius: "4px",
                "&:hover .addToCart": {
                  display: "flex"
                }
              }}>
                <img
                  src={product.image}
                  style={{ width: "50%", height: "auto", maxHeight: 200 }}
                />

                <Box sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: "50px",
                  height: "30px",
                  bgcolor: "red",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold"
                }}>
                  -30%
                </Box>

                <Box sx={{
                  position: "absolute",
                  bottom: 150,
                  right: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  gap: 1
                }}>
                  <Typography onClick={() => handleClickWishlist(product)}  sx={{ color: "black", cursor: "pointer" }}>
                    <FillHeartIcon variant="outlined" />
                  </Typography>

                  <Typography sx={{ cursor: "pointer" }}
                    onClick={() => navigate('/ProductDetails', { state: { product } })}>
                    <FillEyeIcon />
                  </Typography>
                </Box>

                <Box className="addToCart" sx={{
                  position: "absolute",
                  justifyContent: "center",
                  top: 220,
                  alignItems: "center",
                  padding: "5px 0px",
                  bgcolor: "black",
                  width: "100%",
                  color: "white",
                  opacity: "80%",
                  display: "none",
                  gap: "10px",
                  cursor: "pointer"
                }}
                  onClick={() => handleClickCart(product)}>

                  Add to Cart
                </Box>
              </Box>



              <Typography>{product.title}</Typography>

              <Typography sx={{ color: "rgba(219,68,68,1)" }}>
                $ {product.price}
              </Typography>

              <Rating name="half-rating" defaultValue={3} precision={0.5} />
            </Box>
          ))}
        </Box>
        <img src={homeImagetwo} alt='homeImage Two' style={{ marginTop: "5%", width: "100%", height: "100%" }} />
      </Box>
      <Box>
        <Box sx={{ display: "flex", marginTop: "50px" }}>
          <RedRectangle sx={{ margin: "10px" }} />
          <Typography sx={{
            color: "rgba(219,68,68,1)", fontWeight: 600, borderRadius: "2px"
            , display: "flex", textAlign: "center",
            alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: "15px",
          }}>Our Products</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant='h4' sx={{ fontWeight: 600, padding: "0px 20px 20px 0px", margin: "20px 30px 30px 0px" }}>Explore Our Products</Typography>
          <Typography sx={{ display: "flex", flexDirection: "row", gap: "10px", cursor: "pointer" }}><LeftArrow /><RightArrow /></Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          mt: 2,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "16px",
          width: "100%",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        }}>
          {products.slice(12, 20).map(product => (
            <Box key={product.id} sx={{
              width: "280px",
              textAlign: "center",
              m: 1,
              position: "relative"
            }}>
              <Box sx={{
                position: "relative",
                width: "280px",
                height: "250px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                bgcolor: "rgba(245, 245, 245, 1)",
                borderRadius: "4px",
                "&:hover .addToCart": {
                  display: "flex"
                }
              }}>
                <img
                  src={product.image}
                  style={{ width: "50%", height: "auto", maxHeight: 200 }}
                />
                <Box sx={{
                  position: "absolute",
                  bottom: 150,
                  right: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  gap: 1
                }}>
                  <Typography onClick={() => handleClickWishlist(product)} sx={{ color: "black", cursor: "pointer" }}>
                    <FillHeartIcon variant="outlined" />
                  </Typography>

                  <Typography sx={{ cursor: "pointer" }}
                    onClick={() => navigate('/ProductDetails', { state: { product } })}>
                    <FillEyeIcon />
                  </Typography>
                </Box>
                <Box className="addToCart" sx={{
                  position: "absolute",
                  justifyContent: "center",
                  top: 220,
                  alignItems: "center",
                  padding: "5px 0px",
                  bgcolor: "black",
                  width: "100%",
                  color: "white",
                  opacity: "80%",
                  display: "none",
                  gap: "10px",
                  cursor: "pointer"
                }}
                  onClick={() => handleClickCart(product)}>
                  Add to Cart
                </Box>
              </Box>

              <Typography>{product.title}</Typography>

              <Typography sx={{ color: "rgba(219,68,68,1)" }}>
                $ {product.price}
              </Typography>

              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", }}>
          <Button sx={{ bgcolor: "rgba(219, 68, 68, 1)", textTransform: "capitalize", color: "white", padding: "10px", marginTop: "40px" }}>View All Products</Button>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", marginTop: "5%" }}>

          <RedRectangle sx={{ margin: "10px" }} />
          <Typography sx={{
            color: "rgba(219,68,68,1)", fontWeight: 600, borderRadius: "2px"
            , display: "flex", textAlign: "center",
            alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: "15px"
          }}>Featured</Typography>        </Box>

        <Typography variant='h4' sx={{ fontWeight: 600, padding: "0px 20px 20px 0px", margin: "20px 30px 30px 0px" }}>New Arrival</Typography>
        <img src={homeImageOne} alt='img' width={"100%"} />
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
    </Box>
  )
}

export default Home
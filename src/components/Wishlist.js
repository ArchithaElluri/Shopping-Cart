import React, { useContext, useEffect, useState } from 'react'
import { CartWhite, DeleteIcon, FillEyeIcon, FillHeartIcon, RedRectangle } from '../assets/Icons';
import { Box, Button, Rating, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../App';

export default function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState([])

  const {wishlist, setWishlist, setCartItems, } = useContext(cartContext)

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setWishlistProducts(json))
  }, []);

  const handleDeleteClickWIshlist = (index) => {
    const updatedWishlistItems = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlistItems)
  }

  const handleClickCart = (wishlistItem) => {
    console.log("cartItem click", wishlistItem);
  
    setCartItems(prev => {
      const updatedCartList = [...prev, wishlistItem];
      console.log("total array of cartItems", updatedCartList);
      return updatedCartList;
    
      
    })
  };

  return (
    <Box sx={{width:"80%"}}>
      <Box>
        <Box>
        <Typography variant='h5' sx={{margin:"30px 0px"}}>Wishlish ({wishlist?.length})</Typography>
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
          marginBottom:"20px",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        }}>
        {wishlist.map((wishlistItem,index) => (
          <Box key={wishlistItem.id} sx={{
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
            }}>
              <img
                src={wishlistItem.image}
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
                bottom: 200,
                right: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: 1
              }}>

                <Typography sx={{ cursor: "pointer"}} onClick={()=>handleDeleteClickWIshlist(index)}>
                  <DeleteIcon />
                </Typography>
              </Box>

            </Box>
            <Box sx={{
              position: "absolute", justifyContent: "center", top: 220, alignItems: "center", padding: "5px 0px",
              bgcolor: "black", width: "100%", color: "white", opacity: "80%",
              display: "flex", gap: "10px", cursor: "pointer"
            }}
            onClick={()=>handleClickCart(wishlistItem)}>
              <CartWhite />
              Add to Cart</Box>

            <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>{wishlistItem.title}</Typography>

            <Typography sx={{ color: "rgba(219,68,68,1)", fontWeight: "bold", fontSize: "18px" }}>
              $ {wishlistItem.price}
            </Typography>

          </Box>
        ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <RedRectangle sx={{ margin: "10px" }} />
        <Typography sx={{
          color: "black", fontWeight: 600, borderRadius: "2px"
          , display: "flex", textAlign: "center", fontSize: "18px",
          alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: "15px"
        }}>Just For You</Typography>
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
        {wishlistProducts.slice(0, 4).map(product => (
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
                bottom: 200,
                right: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: 1
              }}>

                <Typography sx={{ cursor: "pointer" }}
                  onClick={() => navigate('/ProductDetails', { state: { product } })}>
                  <FillEyeIcon />
                </Typography>
              </Box>

            </Box>
            <Box sx={{
              position: "absolute", justifyContent: "center", top: 220, alignItems: "center", padding: "5px 0px",
              bgcolor: "black", width: "100%", color: "white", opacity: "80%",
              display: "flex", gap: "10px", cursor: "pointer"
            }}>
              <CartWhite />
              Add to Cart</Box>

            <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>{product.title}</Typography>

            <Typography sx={{ color: "rgba(219,68,68,1)", fontWeight: "bold", fontSize: "18px" }}>
              $ {product.price}
            </Typography>
            <Typography sx={{alignItems:"center", display:"flex", gap:"10px", justifyContent:"center"}}>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} /> (65)

            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{height:"100px"}}></Box>
    </Box>
  )
}

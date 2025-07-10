import { Box, Button, ButtonGroup, Divider, Rating, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { DeliveryIcon, FillEyeIcon, FillHeartIcon, RedRectangle, Return } from "../assets/Icons";
import { cartContext } from "../App";

export default function ProductDetails() {
  const location = useLocation();
  const { product } = location.state;
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([])
  const {setCartItems} = useContext(cartContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setRelatedProducts(json))
  }, []);

  const handleClick = (size) => {
    setSelectedSize(size);
  };


  return (
    <Box sx={{ width: "85%", margin: "auto" }}>
      <Typography sx={{ marginBottom: '3%', marginTop: "3%", fontSize: "20px" }}>
        <span style={{ opacity: "50%" }}>Account / Clothing / </span>{product.title}
      </Typography>
      <Box sx={{ display: "flex", width: "100%", gap: "20px" }}>
        
        {/* Left Side - Product Images */}
        <Box sx={{ width: "50%", display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", margin: "10px" }}>
            <Box sx={{ width: "130px", height: "130px", bgcolor: "grey", bgcolor:"rgba(245, 245, 245, 1)", borderRadius:"10px" }}></Box>
            <Box sx={{ width: "130px", height: "130px", bgcolor: "grey", bgcolor:"rgba(245, 245, 245, 1)", borderRadius:"10px" }}></Box>
            <Box sx={{ width: "130px", height: "130px", bgcolor: "grey", bgcolor:"rgba(245, 245, 245, 1)", borderRadius:"10px" }}></Box>
            <Box sx={{ width: "130px", height: "130px", bgcolor: "grey", bgcolor:"rgba(245, 245, 245, 1)", borderRadius:"10px" }}></Box>
          </Box>
          <Box sx={{ display: "flex", borderRadius:"5px",bgcolor: "rgba(245, 245, 245, 1)", width: "100%", gap: "20px", height: "100%", alignItems: "center", justifyContent: "center" }}>
            <img src={product.image} alt={product.title} width={"80%"} height={"80%"} />
          </Box>
        </Box>

        {/* Right Side - Product Details */}
        <Box sx={{ gap: "20px", width: "50%", padding:"10px" }}>
          <Typography variant="h4">{product.title}</Typography>
          <Typography sx={{ justifyContent: "flex-start", display: "flex" }}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> 
            (150 Reviews) 
            <span style={{ color: "rgba(0, 255, 102, 1)", marginLeft: "5px" }}>In Stock</span>
          </Typography>
          <Typography variant="h4" sx={{ color: "rgba(219,68,68,1)", padding:"5px" }}>$ {product.price}</Typography>
          <Typography sx={{ textTransform: "capitalize", padding:"10px", fontSize:"14px" }}>{product.description}</Typography>
          <Divider sx={{ margin: "10px" }} />
          

          {/* Size Selection */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", padding:"10px"  }}>
            <Typography sx={{ fontSize: "20px", margin: "5px" }}>Size:</Typography>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'contained' : 'outlined'}
                sx={{
                  color: selectedSize === size ? 'white' : 'black',
                  borderColor: 'black',
                  '&:hover': {
                    backgroundColor: 'red',
                    borderColor: 'red',
                    color: 'white',
                  },
                  '&.MuiButton-contained': {
                    backgroundColor: 'red',
                    borderColor: 'red',
                    color: 'white',
                  },
                }}
                onClick={() => handleClick(size)}
              >
                {size}
              </Button>
            ))}
          </Box>

          {/* Quantity and Buy Now */}
          <Box sx={{ display: "flex", gap: 10, margin: "10px 10px 10px 0", padding:"10px"  }}>
            <ButtonGroup>
              <Button variant="contained" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</Button>
              <Button>{count}</Button>
              <Button variant="contained" onClick={() => setCount(count + 1)}>+</Button>
            </ButtonGroup>           
            <Button sx={{ bgcolor: "rgba(219, 68, 68, 1)", textTransform: "capitalize", color: "white", padding: "10px 20px" }} onClick={() => navigate('/Cart', {state: {product}})}>Buy Now</Button>
            <Button variant="Outlined" sx={{ border: "1px solid grey" }}>
              <FavoriteBorderIcon sx={{ marginRight: "10px", marginLeft: "10px", cursor: "pointer" }} />
            </Button>
          </Box>

          {/* Delivery and Returns Info */}
          <Box sx={{ border: "1px solid rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "column", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <Box sx={{ display: "flex", margin: "10px", padding: "10px", gap: "10px" }}>
              <DeliveryIcon />
              <Box sx={{ gap: "10px" }}>
                <Typography>Free Delivery</Typography>
                <a href="" style={{color:"black"}}>Enter your postal code for Delivery Availability</a>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", margin: "10px", padding: "10px", gap: "10px" }}>
              <Return />
              <Box sx={{ gap: "10px" }}>
                <Typography>Return Delivery</Typography>
                <Typography>Free 30 Days Delivery Returns. <a href="" style={{color:"black"}}>Details</a></Typography>
              </Box>
            </Box>
          </Box>

        </Box>     
      </Box>
      <Box sx={{marginTop:"5%", marginBottom:"5%"}}>
      <Box sx={{ display: "flex"}}>
          <RedRectangle sx={{ margin: "10px" }} />
          <Typography sx={{
            color: "rgba(219,68,68,1)", fontWeight: 600, borderRadius: "2px"
            , display: "flex", textAlign: "center",
            alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: "15px"
          }}>Related Items</Typography>
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
          {relatedProducts.slice(0, 4).map(product => (
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
                borderRadius: "4px"
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
                  <FillHeartIcon
                    variant="outlined"
                    sx={{
                      color: "black",
                      cursor: "pointer"
                    }}
                  />
              <Typography sx={{ cursor: "pointer" }}
                onClick={() => navigate('/ProductDetails', { state: { product } })}>
                <FillEyeIcon />
              </Typography>

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
      </Box>
    </Box>
  );
}

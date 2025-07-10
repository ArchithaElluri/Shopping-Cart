import { Box, Typography, Button, TextField, Table, TableCell, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { red } from '@mui/material/colors';
import { cartContext } from '../App';
import { Delete } from '@mui/icons-material';
import { CancelIcon } from '../assets/Icons';


function Cart() {
  const { cartItems, setCartItems } = useContext(cartContext)
  const [itemQuantities, setItemQuantities] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const initialQuantities = {}
    cartItems?.forEach(item => {
      initialQuantities[item.id] = 1
    });
    setItemQuantities(initialQuantities)
  }, [cartItems])

  const increaseQuantity = (id) => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1
    }))
  }

  const decreaseQuantity = (id) => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1
    }))
  }

  const calculateSubtotal = () => {
    return cartItems?.reduce((total, item) => total + item.price * itemQuantities[item.id], 0).toFixed(2)
  }

  const handleClickDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index)
    setCartItems(updatedCartItems) 
  }

  return (
    <Box sx={{ width: "80%" }}>
      <Typography sx={{ marginBottom: '3%', marginTop: "3%", fontSize: "18px" }}>
        <span style={{ opacity: "50%" }}>Home / </span>Cart
      </Typography>
      <Box
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: "5px",
              }}
            >
              <Typography style={{ padding: '10px', flex: 1, textAlign: 'left', fontWeight: "bold" }}>Product</Typography>
              <Typography style={{ padding: '10px', flex: 1, textAlign: 'left', fontWeight: "bold" }}>Price</Typography>
              <Typography style={{ padding: '10px', flex: 1, textAlign: 'left', fontWeight: "bold" }}>Quantity</Typography>
              <Typography style={{ padding: '10px', flex: 1, textAlign: 'left', fontWeight: "bold" }}>Subtotal</Typography>
            </Box>
      <Box>
        {cartItems && cartItems?.map((cartItem, index) => (
          <Box key={cartItem.id}>
           

            <Box
              style={{
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "20px 0px",
                padding: "10px",
                borderRadius: "5px",
              }} >
              <Typography onClick={()=>handleClickDelete(index)} sx={{position:"absolute"}}>
              <CancelIcon/>
              </Typography>
              
              <Typography style={{ padding: '10px', flex: 1, alignItems:"center", display:"flex", gap:"10px" }}><img src={cartItem?.image} width={"50px"} height={"50px"}/>{cartItem?.title}</Typography>
              <Typography style={{ padding: '10px', flex: 1 }}>${cartItem?.price}</Typography>
              <Typography style={{ padding: '10px', flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '5px',
                    width: 'fit-content',
                  }}
                >
                  <Typography style={{ margin: '0 10px' }}>{itemQuantities[cartItem.id]}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <KeyboardArrowUpIcon onClick={() => increaseQuantity(cartItem.id)} />
                    <KeyboardArrowDownIcon onClick={() => decreaseQuantity(cartItem.id)} />
                  </Box>
                </Box>
              </Typography>
              <Typography style={{ padding: '10px', flex: 1 }}>${(cartItem?.price * itemQuantities[cartItem.id]).toFixed(2)}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0px" }}>
        <Button sx={{ border: "1px solid black", borderRadius: "4px", color: "black", textTransform: "capitalize", padding: " 10px 20px" }} onClick={() => navigate('/')}>Return To Shop</Button>
        <Button sx={{ border: "1px solid black", borderRadius: "4px", color: "black", textTransform: "capitalize", padding: "10px 20px" }}>Update Cart</Button>
      </Box>

      <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: "space-between", width: "100%" }}>
        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px', }}>
          <TextField
            required
            variant="standard"
            placeholder="Coupon Code"
            sx={{
              border: "1px solid rgba(0, 0, 0, 1)",
              opacity: "50%",
              height: '50px',
              flex: 1,

              '& .MuiInputBase-input': { padding: '15px 10px', width: "250px" },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <Button variant="contained" sx={{ height: '50px', backgroundColor: red[600], textTransform: "capitalize" }}>Apply Coupon</Button>
        </Box>

        <Box sx={{ border: "2px solid rgba(0, 0, 0, 1)", padding: "20px", borderRadius: "4px", width: "40%" }}>
          <Typography variant='h5'>Cart Total</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0px' }}>
            <Typography>Subtotal:</Typography>
            <Typography>${calculateSubtotal()}</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0px' }}>
            <Typography>Shipping:</Typography>
            <Typography>Free</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0px', fontWeight: 'bold' }}>
            <Typography>Total:</Typography>
            <Typography>${calculateSubtotal()}</Typography>
          </Box>
          <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <Button variant="contained" sx={{ marginTop: '3%', backgroundColor: red[600], textTransform: "none" }} onClick={() => navigate('/Checkout',{state: {cartItems}})}>Proceed to checkout</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart

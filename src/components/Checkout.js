import { CheckBox } from '@mui/icons-material'
import { Box, Button, Checkbox, Divider, Radio, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useContext, useEffect, useState } from 'react'
import BankCard from "../assets/BankCards.svg"
import { cartContext } from '../App'

function Checkout() {
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItems } = useContext(cartContext)

  useEffect(() => {
    const initialQuantities = {}
    cartItems?.forEach(item => {
      initialQuantities[item.id] = 1
    })
    setItemQuantities(initialQuantities)
  }, [cartItems])

  const calculateSubtotal = () => {
    return cartItems?.reduce((total, item) => total + item.price * itemQuantities[item.id], 0).toFixed(2);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '30px', padding: '20px', width: "85%" }}>
      <Box>
        <Typography sx={{ marginBottom: '3%', marginTop: "3%" }}><span style={{ opacity: "50%" }}>
          Account / My Account / Product / View Cart / </span>Checkout
        </Typography>
        <Typography variant='h4' sx={{ marginBottom: "10px" }}>Billing Details</Typography>

        <Typography sx={{ marginBottom: "2px" }}>First Name</Typography>
        <TextField required variant="standard" sx={{
          bgcolor: 'rgba(245, 245, 245, 1)', height: '50px', width: '100%', marginBottom: "6px",
          '& .MuiInputBase-input': { padding: '15px 10px' }
        }} InputProps={{ disableUnderline: true }} />
        <Typography sx={{ marginBottom: "2px" }}>Company Name</Typography>
        <TextField required variant="standard" sx={{
          bgcolor: 'rgba(245, 245, 245, 1)', height: '50px', width: '100%', marginBottom: "6px",
          '& .MuiInputBase-input': { padding: '15px 10px' }
        }} InputProps={{ disableUnderline: true }} />
        <Typography sx={{ marginBottom: "2px" }}>Street Address</Typography>
        <TextField required variant="standard" sx={{
          bgcolor: 'rgba(245, 245, 245, 1)', height: '50px', width: '100%', marginBottom: "6px",
          '& .MuiInputBase-input': { padding: '15px 10px' }
        }} InputProps={{ disableUnderline: true }} />
        <Typography sx={{ marginBottom: "2px" }}>Apartment, floor, etc.. (optional)</Typography>
        <TextField required variant="standard" sx={{
          bgcolor: 'rgba(245, 245, 245, 1)', height: '50px', width: '100%', marginBottom: "6px",
          '& .MuiInputBase-input': { padding: '15px 10px' }
        }} InputProps={{ disableUnderline: true }} />
        <Typography sx={{ marginBottom: "2px" }}>Town/City</Typography>
        <TextField required variant="standard" sx={{
          bgcolor: 'rgba(245, 245, 245, 1)', height: '50px', width: '100%', marginBottom: "6px",
          '& .MuiInputBase-input': { padding: '15px 10px' }
        }} InputProps={{ disableUnderline: true }} />
        <Typography sx={{ marginBottom: "2px" }}>Phone Number</Typography>
        <TextField required variant="standard" sx={{
          bgcolor: 'rgba(245, 245, 245, 1)', height: '50px', width: '100%', marginBottom: "6px",
          '& .MuiInputBase-input': { padding: '15px 10px' }
        }} InputProps={{ disableUnderline: true }} />
        <Typography sx={{ marginBottom: "2px" }}>Email Address</Typography>
        <TextField required variant="standard" sx={{
          bgcolor: 'rgba(245, 245, 245, 1)', height: '50px', width: '100%', marginBottom: "6px",
          '& .MuiInputBase-input': { padding: '15px 10px' }
        }} InputProps={{ disableUnderline: true }} />
        <Typography><Checkbox defaultChecked
          sx={{
            '&.Mui-checked': {
              color: red[600],
            },
          }}
        /> Save this information for faster check-out next time</Typography>
      </Box>
      <Box sx={{ flex: 1, padding: '20px', borderRadius: '8px', marginLeft: "50px", alignItems: "center", }}>

        {cartItems?.map(product => (
          <>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', flexDirection: "row" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={product?.image || ''} alt='Product' style={{ width: '50px', height: '50px' }} />
                <Typography>
                  {product.title.length > 25 ? `${product.title.substring(0, 35)}...` : product.title}
                </Typography>
              </Box>
              <Typography sx={{ textAlign: "left" }}>$ {product.price}</Typography>

            </Box>
          </>
        ))}
        <Box sx={{ margin: '20px 0px', }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <Typography>Subtotal:</Typography>
            <Typography>${calculateSubtotal()}</Typography>
          </Box>
          <Divider sx={{ margin: "10px 0px" }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <Typography>Shipping:</Typography>
            <Typography>Free</Typography>
          </Box>
          <Divider sx={{ margin: "10px 0px" }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 'bold' }}>
            <Typography>Total:</Typography>
            <Typography>${calculateSubtotal()}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Radio /> Bank
          </Typography>
          <img src={BankCard} alt='Bank cards' style={{ width: '30%', marginBottom: '10px' }} />
        </Box>

        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <Radio /> Cash on Delivery
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <TextField
            required
            variant="standard"
            placeholder="Coupon Code"
            sx={{
              bgcolor: 'rgba(245, 245, 245, 1)',
              height: '50px',
              flex: 1,
              '& .MuiInputBase-input': { padding: '15px 10px' },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <Button variant="contained" sx={{ height: '50px', backgroundColor: red[600] }}>Apply Coupon</Button>
        </Box>
        <Button variant="contained" sx={{ height: '50px', backgroundColor: red[600], justifyContent: "flex-end", display: "flex" }} onClick={() => alert('Your Order Placed Successfully...!')}>Place Order</Button>

      </Box>

    </Box>
  )
}

export default Checkout

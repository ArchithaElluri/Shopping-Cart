import { Box, Input, Badge, Typography } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import searchIcon from "../assets/search.png"
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import cartIcon from "../assets/Cart1.png"
import account from "../assets/user.png"
import account_red from "../assets/user_red.png"
import { MyCancel, MyOrders, WhiteUser, Logout, Reviews } from '../assets/Icons'
import "./Nav.css"
import { cartContext } from '../App'

function Nav() {
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const {cartItems, wishlist } = useContext(cartContext)

    const handleClick = () => {
        setClicked(true)
    }

    useEffect(() => {
        if (location.pathname !== '/Account') {
            setClicked(false)
        }
    }, [location])


 
    console.log("cartItems in Nav bar:", cartItems)

    return (
        <>
            <Box sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", width: "100%" }}>
                <h2>Exclusive</h2>
                <Box>
                    <ul
                        style={{
                            cursor: "pointer",
                            justifyContent: "space-around",
                            fontWeight: 600,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            listStyleType: "none",
                        }}
                    >
                        <li style={{ margin: "10px" }}>
                            <NavLink
                                exact="true"
                                to="/"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li style={{ margin: "10px" }}>
                            <NavLink
                                to="/Contact"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li style={{ margin: "10px" }}>
                            <NavLink
                                to="/About"
                                className="nav-link"
                                activeClassName="active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li style={{ margin: "10px" }}>
                            <NavLink
                                to="/SignUp"
                                className="nav-link"
                                activeClassName="active"
                            >
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </Box>

                <Box sx={{ justifyContent: "space-around", display: "flex", alignItems: "center", flexDirection: "row", marginRight: "10px" }}>
                    <Box sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '240px', paddingRight: '12px', borderRadius: '5px', border: 'none',
                        height: '40px',
                        bgcolor: 'rgba(245, 245, 245, 1)'
                    }}>
                        <Input placeholder='What are you looking for?' disableUnderline
                            sx={{ width: '220px', border: 'none', height: '30px', paddingLeft: '8px', '&::before, &::after': { display: 'none' }, }} />
                        <img src={searchIcon} alt='searchIcon' style={{ width: '20px', height: '20px' }} />
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between", width:"100%", alignItems:"center"}}>
                    <Badge badgeContent={wishlist?.length} color="error" sx={{ cursor: "pointer" }} >
                        <FavoriteBorderIcon onClick={()=>navigate('/Wishlist', {state:{wishlist}})} />
                    </Badge>
                    <Badge badgeContent={cartItems?.length} color="error" sx={{ cursor: "pointer" }} >
                        <img src={cartIcon} alt='cart' onClick={()=> navigate('/Cart')} />
                    </Badge>
                    <img src={clicked ? account_red : account} onClick={handleClick} alt='account' style={{ cursor: "pointer" }} />
                </Box>
                </Box>
            </Box>

            {clicked && (
                <Box sx={{ position: "absolute", right: "130px", top: "80px", width: "auto", padding: "10px", borderRadius: "5px", flex:0 }}>
                    <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.5)", color: "white", padding: "10px", borderRadius: "5px" }}>
                        <Typography sx={{ alignItems: "center", display: "flex", cursor: "pointer", gap: "4px", padding: "5px" }} onClick={() => { navigate('/Account'); setClicked(false) }}><WhiteUser />Manage My Account</Typography>
                        <Typography sx={{ alignItems: "center", display: "flex", cursor: "pointer", gap: "10px", padding: "5px" }}><MyOrders />My Orders</Typography>
                        <Typography sx={{ alignItems: "center", display: "flex", cursor: "pointer", gap: "10px", padding: "5px" }}><MyCancel />My Cancellation</Typography>
                        <Typography sx={{ alignItems: "center", display: "flex", cursor: "pointer", gap: "10px", padding: "5px" }}><Reviews />My Reviews</Typography>
                        <Typography sx={{ alignItems: "center", display: "flex", cursor: "pointer", gap: "10px", padding: "5px" }}><Logout />Logout</Typography>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default Nav

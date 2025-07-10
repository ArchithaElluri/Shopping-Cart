import './App.css';
import Home from './homecomponent/Home';
import SignUp from './auth/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Main from './homecomponent/main/Main';
import Account from './components/Account';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import ProductDetailPage from './components/ProductDetailPage';
import Wishlist from './components/Wishlist';
import { createContext, useState } from 'react';
export const cartContext =  createContext()

function App() {
  const [cartItems, setCartItems] = useState([])
  const [wishlist, setWishlist] = useState([])

  return (
    <cartContext.Provider value={{
      cartItems, setCartItems, wishlist,setWishlist}}>
    <BrowserRouter>
     <Routes>
     <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/ProductDetails' element={<ProductDetailPage/>}/>
          <Route path='/wishlist' element={<Wishlist/>} />
        </Route>
      </Routes>
  </BrowserRouter>
  </cartContext.Provider>

  );
}

export default App;

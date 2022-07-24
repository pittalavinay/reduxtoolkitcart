import React from 'react'
import './App.css'
import { AppBar,Toolbar } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cartcount=useSelector((state)=>state.Cartreducer.cartValues.length)

  const totalprice=useSelector((state)=>state.Cartreducer.totalprice)
  return (
    <div>
      <AppBar sx={{backgroundColor:'black'}}>
        <Toolbar>
   <ShoppingCartIcon/>
  <span className='span'> {cartcount}</span>
  ShoppingCart
        </Toolbar>
  <div className='price'> price:{totalprice}</div>
      </AppBar>
    </div>
  )
}

export default Navbar
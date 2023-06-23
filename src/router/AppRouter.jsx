import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import History from '../pages/history/History'
import User from '../pages/user/User'
import RestaurantDetails from '../pages/restaurantDetails/RestaurantDetails'
import PlatoDetails from '../pages/platoDetails/PlatoDetails'
import Cart from '../pages/cart/Cart'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/Menu' element={<Layout />}>
          <Route path='/Menu/Home' element={<Home />} />
          <Route path='/Menu/History' element={<History />} />
          <Route path='/Menu/User' element={<User/>} />
        </Route>
        <Route path='/ResurantDetails' element={<RestaurantDetails/>}/>
        <Route path='/FoodDetails' element={<PlatoDetails/>}/>
        <Route path='/ShoppingCart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
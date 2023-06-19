import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Layout from '../components/Layout'

const AppRouter = () => {
  const [userLoggedIn, setUserLoggedIn]= useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<PublicRouter isAutentication={userLoggedIn}/>}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='/' element={<Layout/>}>
        <Route element ={<PrivateRouter isAutentication={userLoggedIn}/>}>
        <Route path='home' element={<Home/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
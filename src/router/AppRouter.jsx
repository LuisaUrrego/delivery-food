import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Layout from '../components/Layout'

const AppRouter = () => {
  const [userLoggedIn, setUserLoggedIn]= useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<PublicRouter isAutentication={userLoggedIn}/>}>
          <Route path='' element={<Register/>}/>
        </Route>
        <Route path='/' element={<Layout/>}>
        <Route element ={<PrivateRouter isAutentication={userLoggedIn}/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
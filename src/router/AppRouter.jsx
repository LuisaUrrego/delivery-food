import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        {/* <Route path='/Home' element={<Layout/>}/> */}
        <Route path='/Home' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
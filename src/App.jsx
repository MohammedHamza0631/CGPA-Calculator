import React, { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavbarMenu from './components/NavbarMenu'
import Dashboard from './components/Dashboard'

function App () {
  return (
    <div className='banner'>
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

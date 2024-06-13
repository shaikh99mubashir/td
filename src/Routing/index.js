import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Service from '../Pages/Services'
import Contactus from '../Pages/Contactus'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contactus" element={<Contactus />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Routing
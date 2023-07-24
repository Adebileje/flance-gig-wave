import React, { Component } from 'react';
import Navbar from '../pages/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Speakers from '../pages/Speakers';
import Sponsors from '../pages/Sponsors';
import Faqs from '../pages/Faqs';
import { Routes, Route } from "react-router-dom";
import GetInTouch from '../pages/GetInTouch';

function App() {
  const link = "http://www.google.com";

  return (
    
    <> 
    <Navbar />
    <Routes>
        <Route index element={<Home />} />
        <Route path='home'  element={<Home />} />
        <Route path='about'  element={<About />} />
        <Route path='speakers'  element={<Speakers />} />
        <Route path='sponsors'  element={<Sponsors />} />
        <Route path='faqs'  element={<Faqs />} />
        <Route path='getInTouch'  element={<GetInTouch />} />
 </Routes>

    </>
  )
}

export default App

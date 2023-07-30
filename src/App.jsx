import React, { Component } from 'react';
import Navbar from '../pages/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Speakers from '../pages/Speakers';
import Sponsors from '../pages/Sponsors';
import Faqs from '../pages/Faqs';
import { Routes, Route } from "react-router-dom";
import GetInTouch from '../pages/GetInTouch';
import Layout from '../pages/Layout';

function App() {

  return (
    
    <>
    <Routes>
    <Route path='/'  element={<Home />} />
        <Route element={<Layout />} >
          <Route path='/about'  element={<About />} />
          <Route path='/speakers'  element={<Speakers />} />
          <Route path='/sponsors'  element={<Sponsors />} />
          <Route path='/faqs'  element={<Faqs />} />
          <Route path='/getInTouch'  element={<GetInTouch />} />
        </Route>
    </Routes>

    </>
  )
}

export default App

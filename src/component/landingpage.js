import React from 'react';
import "./landingpage.css"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Postview from "./postview"
import image4 from "../image/image4.png"

function Homepage(){
  return <>
  <h1 className='center'>Landing page</h1>
  <div className='container1'>
  <div className='eye-pic'>
    <img src={image4} alt='eye' className='img1'/>
  </div>
  <div className='text'>
    <h2 className='bold'>10 Team 04</h2>
    <Link to='/user'>
    <button className='btn'>Enter</button>
    </Link>
  </div>
  </div>
  </>
}
export default function LandingPage() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Homepage/>}/>
      <Route path='/user/*' element={<Postview/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

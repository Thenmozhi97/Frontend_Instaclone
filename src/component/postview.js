import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderPage from './heading';
import Newpost from './newpost';
import Post from './post';
 
export default  function Postview() {
  const [postdata,setPostdata] = useState([]);
  const [indicator,setIndicator] = useState(true);
  useEffect(()=>{
       fetch('https://instaclone-backend-tp3p.onrender.com/user')
      .then(res=>{return res.json()})
      .then((data) => {
        // console.log(data.user);
        setPostdata(data.user);
      })
      
  },[indicator])
  
  return <>
  <HeaderPage/>
  <Routes>
    <Route path='/'  element={
    postdata.map((param,index)=>{
      return <Post key={index} param = {param}/>
    })
  }/>
    <Route path='/newpost' element={<Newpost indicator={setIndicator}/>}/>
  </Routes>
  </>
}

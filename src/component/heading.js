import React from "react";
import "./heading.css"
import {BsCameraFill} from "react-icons/bs"
import {AiOutlineFire} from "react-icons/ai";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default   function HeaderPage(){
return <>
    <div className="heading">
        <h1><span><AiOutlineFire/></span>Instaclone</h1>
        <Link to='/user/newpost'>
        <BsCameraFill className="camera"/>
        </Link>
    </div>
    
</>
}
import React from "react";
import "./post.css"
import {BsThreeDots} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {SlPaperPlane} from "react-icons/sl"

export default function Post({param}){
    return <>
    <div className="container">
        <div className="title">
        <p><strong>{param.name}</strong><br/>{param.location}</p>
        <BsThreeDots/>
        </div>
        <div className="image">
            <img src={param.PostImage} alt="water" className="img"/>
        </div>
        <div className="icons">
            <div className="heart">
            <AiOutlineHeart/>&nbsp;
            <SlPaperPlane />

            </div>
            <p>{param.date}</p>
        </div>
        <p className="likes">{param.likes} likes</p>
        <h4 className="comment"><strong>{param.description}</strong></h4>
    </div>
    </>
}
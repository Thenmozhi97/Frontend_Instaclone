import React from 'react';
import { useNavigate } from 'react-router-dom';
import './newpost.css'

const Newpost = (props)=>{
    const navigate = useNavigate();
    
    async function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        // let formObject = Object.fromEntries(formData.entries());
        // console.log(formObject);
        await fetch('https://instaclone-backend-tp3p.onrender.com/newpost',{
            method:"post",
            body:formData
        }).then(res=>{
            return res.text();
        }).then(text =>{
            console.log(text);
           
            
        })
        props.indicator(value=>{
            return !value;
        })
        navigate('/user');
    }
   
   
    return(
        <>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='box'>
                <input type='file' name='PostImage' id='postimage'/>
                <div className='info'>
                    <input type='text' name='name' placeholder='name' id='name'/>
                    <input type='text' name='location' placeholder='location' id='location'/>
                </div>
                <input type='text' name='description' placeholder='description' id='description'/>
                <button className='btn1'>Post</button>
            </div>
        </form>
        </>
    )
}
export default Newpost;
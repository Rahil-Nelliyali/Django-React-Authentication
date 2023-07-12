import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { getLocal } from '../helpers/auth'
import jwt_decode from "jwt-decode"
import profile from '../profile.png'
import './Userprofle.css'

import { SlUserFollow } from 'react-icons/sl'
import { AiFillPlusCircle } from  'react-icons/ai'
import { SlLogout } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

function UserProfile() {

    const {user_id} = jwt_decode(getLocal())
    const [profile_img, setImage] = useState()
    const [password, setPassword] = useState()

    const history = useNavigate()


    const [user, setUser] = useState({
        username: '',
        email: "",
        profile_img: ""
    })
    useEffect(()=>{
        async function getUser(){
            
                const user = await axios.get(`http://localhost:8000/api/user-update/${user_id}/`)
                setUser(user.data)
            
        }
        getUser();
        
    },[])
    // console.log('profile', user.profile_img);

    const updateProfile = async (e)=> {
        e.preventDefault()

        const response = await fetch(`http://localhost:8000/api/user-update-form/${user_id}/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                profile_img,
            })
        })
        console.log('image',profile_img, 'user',user.username);
    }
  return (
    // <div className='user-main-div'>
        <div className='sub-section'>
            <div className='sub-one'>
            <img className='profile-pic' src={user.profile_img ? 'http://localhost:8000'+user.profile_img : profile} alt="" />
            <form onSubmit={updateProfile}>
                    <input type="file" name='profile_img'
                    onChange={e=>setImage(e.target.files[0].name)}
                    />
 
                    <input type="submit" className='img-upload' value='upload img' />
                </form>
                
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
            </div>
            <div className="sub-two">
                <h3 className='navi'>Connect <SlUserFollow/></h3>
                <h3>Follow <AiFillPlusCircle/></h3>
            </div>
            
        </div>
    // </div>
  )
}

export default UserProfile
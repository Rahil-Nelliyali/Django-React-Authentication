import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { getLocal } from '../helpers/auth'
import jwt_decode from "jwt-decode"
import profile from '../profile.png'
import './Userprofle.css'

import { SlUserFollow } from 'react-icons/sl'
import { AiFillPlusCircle } from  'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function UserProfile() {

    const {user_id} = jwt_decode(getLocal())
    const [profile_img, setImage] = useState()



    const [user, setUser] = useState({
        username: '',
        email: "",
        profile_img: ""
    })
    useEffect(()=>{
        async function getUser(){
            
                const user = await axios.get(`http://localhost:8000/api/class-userlist/${user_id}/`)
                setUser(user.data)
            
        }
        getUser();
        
    },[])
    // console.log('profile', user.profile_img);

    // const updateProfile = async (e)=> {
    //     e.preventDefault()

    //     const response = await fetch(`http://localhost:8000/api/user-update-form/${user_id}/`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             profile_img,
    //         })
    //     })
    //     console.log('image',profile_img, 'user',user.username);
    // }

    const updateProfileImage = async (newProfileImage) => {
        const url = 'http://127.0.0.1:8000/api/class-userlist/7/'; // Replace '7' with the user ID you want to update
      
        const formData = new FormData();
        formData.append('profile_img', newProfileImage); // Assuming 'newProfileImage' is a File object or Blob
      
        try {
          const response = await fetch(url, {
            method: 'PATCH', // Use PATCH or PUT based on your backend API's requirements
            body: formData,
          });
      
          if (response.ok) {
            console.log('Profile image updated successfully!');
            // Handle any further actions or notifications upon successful update
          } else {
            console.error('Failed to update profile image.');
            // Handle error cases or display error messages to the user
          }
        } catch (error) {
          console.error('Error occurred while updating profile image:', error);
          // Handle any network or other errors that occurred during the update process
        }
      };
      
  return (
    // <div className='user-main-div'>
        <div className='sub-section'>
        <div className='sub-one'>
        <img
          className='profile-pic'
          src={user.profile_img ? 'http://localhost:8000' + user.profile_img : profile}
          alt=""
        />
        <form onSubmit={updateProfileImage} encType="multipart/form-data">
        <input
        type="file"
        name="profile_img"
        onChange={e => setImage(e.target.files[0])} // Assign the file object directly
      />
      
          <input type="submit" className='img-upload' value='Upload Image' />
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
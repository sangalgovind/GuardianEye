import React from 'react';
import "./ProfileCard.css"
import Navbar from './Navbar';
import profile from "../pictures/profile.png"
const ProfileCard = ({ name, hospitalName, price, phoneNumber, email, type }) => {
  return (
    <>
      <Navbar/>
      <div style={{display:"flex", justifyContent:"center"}}>

    <div className='profile-card'>
      <div className='card-header'>
        <h2>Driver Profile</h2>
      </div>
      <div style={{display:"flex",marginLeft:"2rem"}} className='card-body'>
       
        <div>
    <br></br>
    <br></br>
        <p><strong>Name of Driver:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Donald Trump</p>
        <p><strong>Blood Group:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; O+</p>
        <p><strong>Height:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 5'8</p>
        <p><strong>Vehicle Model:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; CIVIC</p>
        <p><strong>License:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 3273 3426 XXXX</p>
        <p><strong>Aadhar Number:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 5658 4747 4364 4374</p>
        <p><strong>Address:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 8/29 Patel Nagar, Near KIET Ghaziabad</p>
        <p><strong>Guardian Number:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;8989339494</p>
        <p><strong>Medic Lane:</strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Yes</p>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <img style={{height:"80%"}} src={profile} alt='profile_img'/>
        </div>
      </div>
        </div>
    </div>
    </>
  );
};

export default ProfileCard;

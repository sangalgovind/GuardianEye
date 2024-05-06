
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import car from "../pictures/car.png"


const Vehicle = () => {
    const navigate=useNavigate();
    const handleNav=()=>{
        navigate("/profile")
    }
  return (
    <>
    <Navbar/>
    <div className='flex  justify-center items-center w-[100%] h-[70%]'>
        <img src={car} alt='car_img'/>
    <div className='w-[27%] flex flex-col gap-2'>
    <div style={{color:"#EC4699"}} className='text-2xl text-blue-400 font-bold'> &ensp;Enter Vehicle Number</div>
     <input type='text' placeholder='Enter Your Vehicle Number' className='border-2 p-[1%] m-[4%]' />
     <button onClick={handleNav} style={{backgroundColor:"#EC4699"}} className='bg-blue-400 text-white m-[4%] p-[1.5%] text-lg rounded-md'>SEARCH</button>
    </div>
   </div>
    </>
  )
}

export default Vehicle
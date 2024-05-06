import React ,{useEffect,useState}from 'react'
import Loccard from './Card/Loccard'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Navbar  from './Navbar';
function Driver() {
  // const[data,setData] = useState([])
  // useEffect(()=>{
  //   axios.post("http://localhost:4000/api/v1/getdriver",{email:localStorage.getItem('email')})
  //   .then((res)=>setData(res.data.response))

  // },[],data)
  // async function Accept(email){
  //   axios.post("http://localhost:4000/api/v1/accept",{email:email})
  //   window.location.reload();
  // }
  
  return (
    <div className='h-[100%]'>
      <Navbar/>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div className='grid grid-cols-3 gap-[2%] mx-[5%]'>
            
            
        <div className='bg-white drop-shadow-2xl border-solid border-2 border-white  py-[2%] rounded-lg flex flex-col'>
         
         <p className='text-xl text-start  p-[2%]'>Name of Driver: Govind</p>
         <p className='text-xl text-start  p-[2%]'>Hospital Name : x</p>
         <p className='text-xl text-start  p-[2%]'>Price : 500</p>
         <p className='text-xl text-start  p-[2%]'>PhoneNumber : 8548547547</p>
         <p className='text-xl text-start  p-[2%]'>Email : govind@gmail.com</p>
         <p className='text-xl text-start  p-[2%]'>Status : Booked</p>
         
     </div>
           
        </div>
    </div>
    </div>
  )
}

export default Driver

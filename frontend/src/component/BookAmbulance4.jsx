import React ,{useEffect,useState}from 'react'
import Loccard from './Card/Loccard'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
function BookAmbulance4() {
    const location = useLocation();
    const { someData } = location.state;
    const[data,setData] = useState([]);
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/api/v1/getavailable",{type:someData})
    //     .then((res)=>setData(res.data.response))
        
    // },[])

  return (
    <>
    <Navbar/>
    <div>
            <p className='text-center my-[2%] text-5xl font-bold'>Ambulance Available</p>
        <div className='grid grid-cols-3 gap-[2%] mx-[5%]'>
            
            {/* {data.map((res)=>(
                <Loccard data={res} className=""/>
            ))} */}
            <Loccard name={"Govind"} hospital={"hospital"} price={"250"} phone={"86868685858"} mail={"govind@gmail.com"} />
            <Loccard name={"Govind"} hospital={"hospital"} price={"250"} phone={"86868685858"} mail={"govind@gmail.com"} />
            <Loccard name={"Govind"} hospital={"hospital"} price={"250"} phone={"86868685858"} mail={"govind@gmail.com"} />
                
        </div>
    </div>
    </>
  )
}

export default BookAmbulance4

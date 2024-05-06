import axios from 'axios'
import {toast} from 'react-toastify'
export default function Make({name,hospital,price,phone,mail}){
    // function Select(){
    //   axios.post("http://localhost:4000/api/v1/request",{name:data.driver,email:localStorage.getItem('myemail'), address:"w345433",driverEmail:"namansharma8042@gmail.com",mobileNo:data.mobileNo})
     
    // }
    return(
      <div className='bg-white drop-shadow-2xl border-solid border-2 border-white  py-[2%] rounded-lg flex flex-col'>
         
          <p className='text-xl text-start  p-[2%]'>Name of Driver: {name}</p>
          <p className='text-xl text-start  p-[2%]'>Hospital Name : {hospital}</p>
          <p className='text-xl text-start  p-[2%]'>Price : {price}</p>
          <p className='text-xl text-start  p-[2%]'>PhoneNumber : {phone}</p>
          <p className='text-xl text-start  p-[2%]'>Email : {mail}</p>
          <p className='text-xl text-start  p-[2%]'>Type : Available</p>
          <div className='flex gap-[2%] justify-center px-[2%]'>
          <button onClick={()=> toast.success("Mail Sent Successfully to Driver")} type="button" class="w-[40%] text-white bg-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 my-[2%] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Select</button>
          </div>
      </div>
    )
  }
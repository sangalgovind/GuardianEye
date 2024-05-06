// import React from 'react'
// import {Link, useNavigate} from 'react-router-dom'
// import Logo from '../pictures/logo.PNG'
// function Navbar() {
//   const navigate = useNavigate()
//   function Logout(){
//     localStorage.removeItem('email');
//     navigate('/login')
//   }
//   return (
//     <div className='flex w-[100%] h-[8%] mb-[1%]'>
//       <div className='w-[20%]'>
//         <a href='/'>

//       <img src={Logo} alt="" className='h-[100%] w-[100%]'/>
//         </a>
//       </div>
//       <div className='w-[80%] flex justify-center '>
//         <div className='w-[80%] flex justify-center items-center gap-[4%] text-base font-semibold'>
//             <div><Link to="/RandomNotification"> Notification</Link></div>
//             <div>
//               <a href='/BookAmbulance3'>

//               Services
//               </a>
//               </div>
//             <div>
//               Contact Us</div>
//             <div><Link to="/map">Find Nearest Hospital to Me</Link></div>
//             {
//               localStorage.getItem('email')?<div>
//                 <button><Link to='/driver'>View My Bookings</Link></button>
//                 <button>Change Status</button>
//               </div>
//               :""
//             }
//         </div>
//         <div className='w-[20%] flex gap-[4%] justify-center items-center'>
//             <button className='w-[40%] text-base font-semibold bg-pink-500 h-[70%] rounded-md text-white'><Link to="/BookAmbulance1">Book Now</Link></button>
//              {
//               localStorage.getItem('email')?
//               <button className='w-[40%] text-base font-semibold bg-white border-pink-500 border-2 h-[70%] rounded-md text-pink-500' onClick={Logout}>Logout</button>
//               :<button className='w-[40%] text-base font-semibold bg-white border-pink-500 border-2 h-[70%] rounded-md text-pink-500'><Link to="/login">Login</Link></button>

//              }       
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../pictures/logo.PNG';

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('email');
    navigate('/login');
  }

  return (
    <div className='flex w-full h-12 mb-1'>
      <div className='w-1/5'>
        <Link to='/'>
          <img src={Logo} alt="Logo" className='h-full w-full' />
        </Link>
      </div>
      <div className='w-4/5 flex justify-center'>
        <div className='w-4/5 flex justify-center items-center gap-4 text-base font-semibold'>
          {/* <div><Link to="/RandomNotification">Notification</Link></div> */}
          {/* <div><Link to='/BookAmbulance3'>Services</Link>&ensp;&ensp;</div> */}
          <div><Link to='/contact'> Contact Us</Link>&ensp;&ensp;</div>
          <div><Link to="/map">Nearest Hospital</Link>&ensp;&ensp;</div>
          <div><Link to="/vehicle">Vehicle</Link>&ensp;&ensp;</div>
         
            <div>
              <button><Link to='/driver'>Booking Status</Link>&ensp;&ensp;</button>
            </div>
          
        </div>
        <div className='w-1/5 flex gap-4 justify-center items-center'>
          <button className='w-2/5 text-base font-semibold bg-pink-500 h-9 rounded-md text-white'>
            <Link to="/BookAmbulance1">Book Now</Link>
          </button>
          {localStorage.getItem('email') ?
            <button className='w-2/5 text-base font-semibold bg-white border-pink-500 border-2 h-9 rounded-md text-pink-500' onClick={handleLogout}>Logout</button> :
            <button className='w-2/5 text-base font-semibold bg-white border-pink-500 border-2 h-9 rounded-md text-pink-500'><Link to="/login">Login</Link></button>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;

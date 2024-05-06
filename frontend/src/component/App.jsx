// // // import React, { useState, useEffect } from 'react';
// // // import Navbar from './Navbar';

// // // const notifications = [
// // //   { title: "Notification 1", message: "This is notification 1." },
// // //   { title: "Notification 2", message: "This is notification 2." },
// // //   { title: "Notification 3", message: "This is notification 3." },
// // //   // Add more notifications as needed
// // // ];

// // // function RandomNotification() {
// // //   const [randomNotification, setRandomNotification] = useState({});

// // //   const showRandomNotification = () => {
// // //     const randomIndex = Math.floor(Math.random() * notifications.length);
// // //     const randomNotification = notifications[randomIndex];
// // //     setRandomNotification(randomNotification);
// // //   };

// // //   useEffect(() => {
// // //     const intervalId = setInterval(() => {
// // //       showRandomNotification(); // Automatically trigger the notification function
// // //     }, 6000);
    
// // //     return () => clearInterval(intervalId); // Clean up the interval when component unmounts
// // //   }, []);

// // //   return (
// // //     <div>
// // //       {randomNotification && (
// // //         <div className="notification">
// // //           <span className="close" onClick={() => setRandomNotification(null)}>&times;</span>
// // //           <h2>{randomNotification.title}</h2>
// // //           <p>{randomNotification.message}</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default RandomNotification;

// // import React, { useState, useEffect } from 'react';
// // import Navbar from './Navbar';

// // const notifications = [
// //   { title: "Notification 1", message: "This is notification 1." },
// //   { title: "Notification 2", message: "This is notification 2." },
// //   { title: "Notification 3", message: "This is notification 3." },
// //   // Add more notifications as needed
// // ];

// // function RandomNotification() {
// //   const [randomNotification, setRandomNotification] = useState(null);

// //   const showRandomNotification = () => {
// //     const randomIndex = Math.floor(Math.random() * notifications.length);
// //     const randomNotification = notifications[randomIndex];
// //     setRandomNotification(randomNotification);
// //   };

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       showRandomNotification(); // Automatically trigger the notification function
// //     }, 6000);
    
// //     return () => clearInterval(intervalId); // Clean up the interval when component unmounts
// //   }, []);

// //   return (
// //     <div>
// //       {randomNotification && (
// //         <div className="notification">
// //           <span className="close" onClick={() => setRandomNotification(null)}>&times;</span>
// //           <h2>{randomNotification.title}</h2>
// //           <p>{randomNotification.message}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default RandomNotification;
// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
//  // Import the Navbar component
 

// const notifications = [
//   { title: "Notification 1", message: "This is notification 1." },
//   { title: "Notification 2", message: "This is notification 2." },
//   { title: "Notification 3", message: "This is notification 3." },
//   // Add more notifications as needed
// ];

// function RandomNotification() {
//   const [randomNotification, setRandomNotification] = useState(null);

//   const showRandomNotification = () => {
//     const randomIndex = Math.floor(Math.random() * notifications.length);
//     const randomNotification = notifications[randomIndex];
//     setRandomNotification(randomNotification);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       showRandomNotification(); // Automatically trigger the notification function
//     }, 6000);
    
//     return () => clearInterval(intervalId); // Clean up the interval when component unmounts
//   }, []);

//   return (
//     <div>
//       <Navbar /> {/* Include the Navbar component */}
//       {randomNotification && (
//         <div className="notification">
//           <span className="close" onClick={() => setRandomNotification(null)}>&times;</span>
//           <h2>{randomNotification.title}</h2>
//           <p>{randomNotification.message}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RandomNotification;/
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
const Home = () => {
  return <h1>Home</h1>;
};

export default Home;const Blogs = () => {
  return <h1><a href=""></a></h1>;
};



export default App;
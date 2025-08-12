
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { UserAuthContextProvider } from "./Context/UserAuthContext";

// import Home from './screens/Home/Home';
// import About from './screens/About/About';
// import Contact from './screens/Contact/Contact';
// import Rooms from './screens/Rooms/Rooms';
// import Navbar from './components/Navbar/Navbar';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// import SingleRoom from "./screens/Rooms/SingleRoom";
// import Booknow from './components/Booking/Booknow';
// import MyBookings from './components/Booking/MyBookings';
// import PaymentPage from './components/Payment/PaymentPage'; // Import the PaymentPage component
// import Confirmation from './components/Confirmation/Confirmation'; // Import the ConfirmationPage component
// import ProtectedRoute from './components/ProtectedRoutes';
// import TeamMembers from './screens/Team/TeamMembers'; 

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <UserAuthContextProvider>
//           <Navbar />
//           <Routes>
//             <Route path="/" index element={<Home />} />
//             <Route path="/rooms" element={<Rooms />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/singleRoom/:roomType" element={<SingleRoom />} />
//             <Route path="/mybookings" element={<MyBookings />} />
            
//             {/* Protected Booknow route */}
//             <Route
//               path="/booknow/:roomType"
//               element={
//                 <ProtectedRoute>
//                   <Booknow />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Payment Page Route */}
//             <Route
//               path="/payment"
//               element={
//                 <ProtectedRoute>
//                   <PaymentPage />
//                 </ProtectedRoute>
//               }
//             />
            
//             {/* Confirmation Page Route */}
//             <Route
//               path="/confirmation"
//               element={
//                 <ProtectedRoute>
//                   <Confirmation />
//                 </ProtectedRoute>
//               }
//             />
            
//             {/* Team Members Route */}
//             <Route path="/team" element={<TeamMembers />} />
            
//             {/* Catch-all route for 404 - Uncomment if needed */}
//             {/* <Route path="*" element={<Error />} /> */}
//           </Routes>
//         </UserAuthContextProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { UserAuthContextProvider } from "./Context/UserAuthContext";
// import { UserAuthProvider } from "./Context/UserAuthContext";
// import Home from './screens/Home/Home';
// import About from './screens/About/About';
// import Contact from './screens/Contact/Contact';
// import Rooms from './screens/Rooms/Rooms';
// import Navbar from './components/Navbar/Navbar';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// import SingleRoom from "./screens/Rooms/SingleRoom";
// import Booknow from './components/Booking/Booknow';
// import MyBookings from './components/Booking/MyBookings';
// import PaymentPage from './components/Payment/PaymentPage'; 
// import Confirmation from './components/Confirmation/Confirmation'; 
// import ProtectedRoute from './components/ProtectedRoutes';
// import TeamMembers from './screens/Team/TeamMembers'; 
// import Faqs from './components/Faqs/Faqs'; // Import the FAQ page
// import { BookingProvider } from "./components/BookingContext";
// import OurStoryPage from "./screens/OurStoryPage/OurStoryPage";
// import MissionPage from "./screens/MissonPage/MissionPage";
// import ReviewsPage from "./screens/Reviews/ReviewsPage";
// import SpecialOfferPage from './screens/SpecialOfferPage/SpecialOfferPage';
// import DiningOptionsPage from './components/DiningOptionsPage/DiningOptionsPage';






// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <UserAuthContextProvider>
//           <Navbar />
//           <Routes>
//             <Route path="/" index element={<Home />} />
           
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/singleRoom/:roomType" element={<SingleRoom />} />
//             <Route path="/mybookings" element={<MyBookings />} />
            
//             {/* Protected Booknow route */}
//             <Route
//               path="/booknow/:roomType"
//               element={
//                 <ProtectedRoute>
//                   <Booknow />
//                 </ProtectedRoute>
//               }
//             />

            
//             <Route
//               path="/payment"
//               element={
//                 <ProtectedRoute>
//                   <PaymentPage />
//                 </ProtectedRoute>
//               }
//             />
            
//             <Route path="/rooms" element={<Rooms />} />
//             <Route
//               path="/confirmation"
//               element={
//                 <ProtectedRoute>
//                   <Confirmation />
//                 </ProtectedRoute>
//               }
//             />
            
          
//             <Route path="/team" element={<TeamMembers />} />

         
//             <Route path="/faqs" element={<Faqs />} />
//             <Route path="/our-story" element={<OurStoryPage />} />
//             <Route path="/mission" element={<MissionPage />} />
//             <Route path="/reviews" element={<ReviewsPage />} />

//             <Route path="/special-offers" element={<SpecialOfferPage />} />
//             <Route path="/dining-options" element={<DiningOptionsPage />}/>

//           </Routes>
          
          
          
//         </UserAuthContextProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserAuthContextProvider } from "./Context/UserAuthContext"; // Ensure the correct import

import Home from './screens/Home/Home';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Rooms from './screens/Rooms/Rooms';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SingleRoom from "./screens/Rooms/SingleRoom";
import Booknow from './components/Booking/Booknow';
import MyBookings from './components/Booking/MyBookings';
import PaymentPage from './components/Payment/PaymentPage'; 
import Confirmation from './components/Confirmation/Confirmation'; 
import ProtectedRoute from './components/ProtectedRoutes';
import TeamMembers from './screens/Team/TeamMembers'; 
import Faqs from './components/Faqs/Faqs';
import { BookingProvider } from "./components/BookingContext";
import OurStoryPage from "./screens/OurStoryPage/OurStoryPage";
import MissionPage from "./screens/MissonPage/MissionPage";
import ReviewsPage from "./screens/Reviews/ReviewsPage";
import SpecialOfferPage from './screens/SpecialOfferPage/SpecialOfferPage';
import DiningOptionsPage from './components/DiningOptionsPage/DiningOptionsPage';
import AdminLogin from "./screens/Adminlog/AdminLogin";
import AdminDashboard from './screens/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContextProvider> {/* Correct import of UserAuthContextProvider */}
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/singleRoom/:roomType" element={<SingleRoom />} />
            <Route path="/mybookings" element={<MyBookings />} />
            
            {/* Protected Booknow route */}
            <Route
              path="/booknow/:roomType"
              element={
                <ProtectedRoute>
                  <Booknow />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
            
            <Route path="/rooms" element={<Rooms />} />
            <Route
              path="/confirmation"
              element={
                <ProtectedRoute>
                  <Confirmation />
                </ProtectedRoute>
              }
            />
            <Route path="/team" element={<TeamMembers />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/special-offers" element={<SpecialOfferPage />} />
            <Route path="/dining-options" element={<DiningOptionsPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

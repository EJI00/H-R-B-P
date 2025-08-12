
// import React, { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import moment from "moment";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import hotel1 from '../../imgs/hotel1.jpg';
// import './Booknow.css';

// export default function Booknow() {
//   const { roomType } = useParams();
//   let roomsDetails = {};

//   // Room details based on room type
//   switch (roomType) {
//     case "single":
//       roomsDetails = {
//         capacity: 1,
//         breakfast: "included",
//         price: 1200,
//         pets: "allowed",
//         roomtype: "single",
//         size: "250 sqft",
//       };
//       break;
//     case "double":
//       roomsDetails = {
//         capacity: 2,
//         breakfast: "included",
//         price: 2400,
//         pets: "allowed",
//         roomtype: "double",
//         size: "500 sqft",
//       };
//       break;
//     case "family":
//       roomsDetails = {
//         capacity: 6,
//         breakfast: "not included",
//         price: 3500,
//         pets: "not allowed",
//         roomtype: "family",
//         size: "750 sqft",
//       };
//       break;
//     case "presidential":
//       roomsDetails = {
//         capacity: 4,
//         breakfast: "included",
//         price: 4300,
//         pets: "not allowed",
//         roomtype: "presidential",
//         size: "1000 sqft",
//       };
//       break;
//     default:
//       break;
//   }

//   // State variables for booking details
//   const [fullName, setFullName] = useState("");
//   const [value, setValue] = useState("");
//   const [cnic, setCnic] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [persons, setPersons] = useState("");
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const navigate = useNavigate();

//   // Handle form field changes
//   const handleName = (e) => setFullName(e.target.value);
//   const handlePersons = (e) => setPersons(e.target.value);
//   const handleEmail = (e) => setEmail(e.target.value);
//   const handleAddress = (e) => setAddress(e.target.value);
//   const handleCnic = (e) => setCnic(e.target.value);
//   const handleChangeStart = (date) => setStartDate(date);
//   const handleChangeEnd = (date) => setEndDate(date);

//   // Calculate the number of days between start and end dates
//   const calculateDaysLeft = (startDate, endDate) => {
//     if (!moment.isMoment(startDate)) startDate = moment(startDate);
//     if (!moment.isMoment(endDate)) endDate = moment(endDate);
//     return endDate.diff(startDate, "days");
//   };

//   const daysLeft = calculateDaysLeft(startDate, endDate);

//   // Format dates for display
//   const formattedDate = startDate.toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
//   const formattedEndDate = endDate.toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   const handleBooking = () => {
//     if (persons > roomsDetails.capacity) {
//       return alert("Please check the capacity of the room.");
//     }
//     if (daysLeft <= 0) {
//       return alert("Please select valid dates.");
//     }
//     if (
//       fullName &&
//       address &&
//       cnic &&
//       email &&
//       value &&
//       persons <= roomsDetails.capacity &&
//       startDate &&
//       endDate
//     ) {
//       const bookingDetails = {
//         name: fullName,
//         address: address,
//         cnic: cnic,
//         email: email,
//         phone: value,
//         persons: persons,
//         type: roomsDetails.roomtype,
//         startDate: formattedDate,
//         endDate: formattedEndDate,
//         totalPrice: daysLeft * roomsDetails.price,
//       };

//       // Display booking confirmation
//       alert(`Booking Confirmed!\n\nDetails:\n${JSON.stringify(bookingDetails, null, 2)}`);

//       // Navigate to payment page
//       navigate("/payment", {
//         state: {
//           bookingDetails: {
//             name: fullName,
//             type: roomsDetails.roomtype,
//             startDate: formattedDate,
//             endDate: formattedEndDate,
//             totalPrice: daysLeft * roomsDetails.price,
//           },
//         },
//       });

//       // Clear form fields
//       setFullName("");
//       setAddress("");
//       setCnic("");
//       setEmail("");
//       setValue("");
//       setPersons("");
//     } else {
//       alert("Please fill all fields");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-md-10 mx-auto col-12 shadow-lg border-0 p-4">
//           <h1 className="display-4 booking-hd">Booking</h1>
//           <div className="row">
//             <div className="col-md-6 col-12 my-auto">
//               <img src={hotel1} className="img-fluid" alt="selected room" />
//             </div>
//             <div className="col-md-6 col-12 my-auto">
//               <h1>Room Details</h1>
//               <table className="table">
//                 <thead className="thead-light">
//                   <tr>
//                     <th className="dark-shade">Room Type</th>
//                     <td>{roomsDetails.roomtype}</td>
//                   </tr>
//                   <tr>
//                     <th className="dark-shade">Capacity</th>
//                     <td>{roomsDetails.capacity + " persons"}</td>
//                   </tr>
//                   <tr>
//                     <th className="dark-shade">Size</th>
//                     <td>{roomsDetails.size}</td>
//                   </tr>
//                   <tr>
//                     <th className="dark-shade">Breakfast</th>
//                     <td>{roomsDetails.breakfast}</td>
//                   </tr>
//                   <tr>
//                     <th className="dark-shade">Pets</th>
//                     <td>{roomsDetails.pets}</td>
//                   </tr>
//                 </thead>
//               </table>
//             </div>
//           </div>

//           <div className="row my-3">
//             <div className="col-md-6 col-12">
//               <div className="form-group">
//                 <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
//                   From Date
//                 </label>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={handleChangeStart}
//                   minDate={moment().toDate()}
//                   className="form-control"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="col-md-6 col-12">
//               <div className="form-group">
//                 <label htmlFor="Todate" className="font-weight-bolder mr-3">
//                   To Date
//                 </label>
//                 <DatePicker
//                   selected={endDate}
//                   minDate={moment().toDate()}
//                   onChange={handleChangeEnd}
//                   className="form-control"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-6 col-12">
//               <h6 className="font-weight-bolder">Number of days: {daysLeft}</h6>
//               <mark>Please make sure Check-in time is from 9 am to 12 pm</mark>
//             </div>
//             <div className="col-md-6 col-12">
//               <h6 className="font-weight-bold">
//                 Price per day: <span>Rs {roomsDetails.price}</span>
//               </h6>
//               <h6 className="font-weight-bold">
//                 Total Price to be paid: <span className="text-primary">Rs {roomsDetails.price * daysLeft}</span>
//               </h6>
//             </div>
//           </div>

//           <div className="row my-4">
//             <div className="col-md-12 col-12 my-auto">
//               <div className="col-md-12 col-12 float-right">
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="persons">No. of persons</label>
//                     <input
//                       type="number"
//                       value={persons}
//                       className="form-control"
//                       onChange={handlePersons}
//                       id="persons"
//                       placeholder="No. of persons"
//                       required
//                     />

//                     <label htmlFor="name" className="font-weight-bolder">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={fullName}
//                       onChange={handleName}
//                       id="name"
//                       placeholder="Full Name"
//                       required
//                     />
//                     <label htmlFor="cnic" className="font-weight-bolder">
//                       CNIC
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={cnic}
//                       onChange={handleCnic}
//                       id="cnic"
//                       placeholder="CNIC"
//                       required
//                     />
//                     <label htmlFor="address" className="font-weight-bolder">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={address}
//                       onChange={handleAddress}
//                       id="address"
//                       placeholder="Address"
//                       required
//                     />
//                     <label htmlFor="email" className="font-weight-bolder">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       value={email}
//                       onChange={handleEmail}
//                       id="email"
//                       placeholder="Email"
//                       required
//                     />
//                     <label htmlFor="phone" className="font-weight-bolder">
//                       Phone Number
//                     </label>
//                     <PhoneInput
//                       international
//                       defaultCountry="PK"
//                       value={value}
//                       onChange={setValue}
//                       className="form-control"
//                       required
//                     />
//                   </div>
//                   <button type="button" className="btn btn-primary" onClick={handleBooking}>
//                     Book Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import hotel1 from '../../imgs/hotel1.jpg';
import './Booknow.css';

export default function Booknow() {
  const { roomType } = useParams();
  let roomsDetails = {};

  // Room details based on room type
  switch (roomType) {
    case "single":
      roomsDetails = {
        capacity: 1,
        breakfast: "included",
        basePrice: 1,
        pets: "allowed",
        roomtype: "single",
        size: "250 sqft",
      };
      break;
    case "double":
      roomsDetails = {
        capacity: 2,
        breakfast: "included",
        basePrice: 2,
        pets: "allowed",
        roomtype: "double",
        size: "500 sqft",
      };
      break;
    case "family":
      roomsDetails = {
        capacity: 6,
        breakfast: "not included",
        basePrice: 3,
        pets: "not allowed",
        roomtype: "family",
        size: "750 sqft",
      };
      break;
    case "presidential":
      roomsDetails = {
        capacity: 4,
        breakfast: "included",
        basePrice: 1,
        pets: "not allowed",
        roomtype: "presidential",
        size: "1000 sqft",
      };
      break;
    default:
      break;
  }

  // State variables for booking details
  const [fullName, setFullName] = useState("");
  const [value, setValue] = useState("");
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [persons, setPersons] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [rating, setRating] = useState(10); // Rating state
  const navigate = useNavigate();

  // Handle form field changes
  const handleName = (e) => setFullName(e.target.value);
  const handlePersons = (e) => setPersons(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCnic = (e) => setCnic(e.target.value);
  const handleChangeStart = (date) => setStartDate(date);
  const handleChangeEnd = (date) => setEndDate(date);
  const handleRatingChange = (e) => setRating(e.target.value); // Update rating

  // Calculate the number of days between start and end dates
  const calculateDaysLeft = (startDate, endDate) => {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  };

  const daysLeft = calculateDaysLeft(startDate, endDate);

  // Format dates for display
  const formattedDate = startDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedEndDate = endDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Function to calculate total price based on room's base price and rating
  const calculateTotalPrice = (basePrice, rating, daysLeft) => {
    return (basePrice * (rating / 10) * daysLeft).toFixed(2); // Scale price by rating
  };

  const handleBooking = () => {
    if (persons > roomsDetails.capacity) {
      return alert("Please check the capacity of the room.");
    }
    if (daysLeft <= 0) {
      return alert("Please select valid dates.");
    }

    // Check if all fields are filled
    if (!fullName) return alert("Please fill in your full name.");
    if (!address) return alert("Please fill in your address.");
    
    if (!email) return alert("Please fill in your email.");
    if (!value) return alert("Please fill in your phone number.");
    if (!persons) return alert("Please fill in the number of persons.");
    if (!startDate || !endDate) return alert("Please select check-in and check-out dates.");

    const totalPrice = calculateTotalPrice(roomsDetails.basePrice, rating, daysLeft);

    const bookingDetails = {
      name: fullName,
      address: address,

      email: email,
      phone: value,
      persons: persons,
      type: roomsDetails.roomtype,
      startDate: formattedDate,
      endDate: formattedEndDate,
      totalPrice: totalPrice, // Total price calculation
    };

    // Navigate to payment page
    navigate("/payment", {
      state: {
        bookingDetails,
      },
    });

    // Clear form fields
    setFullName("");
    setAddress("");
    
    setEmail("");
    setValue("");
    setPersons("");
    
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto col-12 shadow-lg border-0 p-4">
          <h1 className="display-4 booking-hd">Booking</h1>
          <div className="row">
            <div className="col-md-6 col-12 my-auto">
              <img src={hotel1} className="img-fluid" alt="selected room" />
            </div>
            <div className="col-md-6 col-12 my-auto">
              <h1>Room Details</h1>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th className="dark-shade">Room Type</th>
                    <td>{roomsDetails.roomtype}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Capacity</th>
                    <td>{roomsDetails.capacity + " persons"}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Size</th>
                    <td>{roomsDetails.size}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Breakfast</th>
                    <td>{roomsDetails.breakfast}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Pets</th>
                    <td>{roomsDetails.pets}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
                  From Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={handleChangeStart}
                  minDate={moment().toDate()}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Todate" className="font-weight-bolder mr-3">
                  To Date
                </label>
                <DatePicker
                  selected={endDate}
                  minDate={moment().toDate()}
                  onChange={handleChangeEnd}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-12">
              <h6 className="font-weight-bolder">Number of days: {daysLeft}</h6>
              <mark>Please make sure Check-in time is from 9 am to 12 pm</mark>
            </div>
            <div className="col-md-6 col-12">
              <h6 className="font-weight-bold">
                Price per day: ₹{roomsDetails.basePrice}
              </h6>
              <h6 className="font-weight-bold">
                Total Price: ₹{calculateTotalPrice(roomsDetails.basePrice, rating, daysLeft)}
              </h6>
            </div>
          </div>

          <h4 className="my-3">Enter your details</h4>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                value={fullName}
                onChange={handleName}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={handleAddress}
                required
              />
            </div>

           

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="persons">Number of Persons</label>
              <input
                type="number"
                className="form-control"
                id="persons"
                value={persons}
                onChange={handlePersons}
                required
              />
            </div>

            

            <button type="button" className="btn btn-primary my-3" onClick={handleBooking}>
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


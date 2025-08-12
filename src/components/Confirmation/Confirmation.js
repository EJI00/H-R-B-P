
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ref, set } from "firebase/database";
import { db } from "../../config/firebase-config";
import { useUserAuth } from "../../Context/UserAuthContext";
import "./Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const printRef = useRef();
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [generatedKey, setGeneratedKey] = useState(null);

  const handleAddRoom = () => {
    navigate('/rooms');
  };

  const handlePrint = () => {
    const printContent = printRef.current;
    const WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  const saveBooking = () => {
    if (!bookingDetails || !user) {
      console.error("Booking details or user not available.");
      alert("Error: Missing booking details or user information.");
      return;
    }

    const bookingId = bookingDetails.id || Date.now().toString();
    const bookingRef = ref(db, `/bookings/${bookingId}`);

    set(bookingRef, {
      ...bookingDetails,
      id: bookingId,
      refID: user.email,
      status: "Pending",
    })
      .then(() => {
        navigate('/mybookings'); // Navigate to MyBookings page if successful
      })
      .catch((error) => {
        console.error("Error saving booking:", error);
        alert("Failed to save booking. Please try again.");
      });
  };

  const generateAndSendKey = () => {
    const key = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit key
    setGeneratedKey(key);

    const message = `Your digital booking key is: ${key}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsAppLink, '_blank');
  };

  if (!bookingDetails) {
    return <div className="container">No booking details found.</div>;
  }

  return (
    <div className="confirmation-container">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your payment.</p>
      <h3>Booking Summary</h3>
      <div ref={printRef} className="printable-content">
        <ul>
          <li>Name: {bookingDetails.name}</li>
          <li>Room Type: {bookingDetails.type}</li>
          <li>Check-in: {bookingDetails.startDate}</li>
          <li>Check-out: {bookingDetails.endDate}</li>
          <li>Total Price: Rs {bookingDetails.totalPrice}</li>
        </ul>
      </div>
      <div className="button-group">
        <button className="add-room-button" onClick={handleAddRoom}>
          + Add Another Room
        </button>
        <button className="print-button" onClick={handlePrint}>
          Print
        </button>
        <button className="confirm-booking-button" onClick={saveBooking}>
          Save to My Bookings
        </button>
      </div>

      <div className="digital-key-section">
        <h4>Generate Digital Key</h4>
        <input
          type="text"
          placeholder="Enter WhatsApp number"
          value={whatsAppNumber}
          onChange={(e) => setWhatsAppNumber(e.target.value)}
        />
        <button className="generate-key-button" onClick={generateAndSendKey}>
          Generate & Send Key
        </button>
        {generatedKey && <p>Your digital key is: {generatedKey}</p>}
      </div>
    </div>
  );
};

export default Confirmation;

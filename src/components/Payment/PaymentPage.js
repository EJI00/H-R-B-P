
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [upiId] = useState("kartickeji@oksbi");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const handlePayment = () => {
    if (paymentMethod === "UPI") {
      setShowConfirmationPopup(true);
    } else if (paymentMethod === "Card" && (!cardNumber || !cardExpiry || !cardCvc || !cardHolderName)) {
      alert("Please fill in all card details.");
      return;
    } else {
      setShowConfirmationPopup(true);
    }
  };

  const closePopup = () => {
    setShowConfirmationPopup(false);
    navigate("/confirmation", { state: { bookingDetails } });
  };

  const handlePrint = () => {
    const printContent = document.getElementById('print-section').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Payment Details</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; padding: 20px; } table { width: 100%; border-collapse: collapse; } th, td { padding: 8px; text-align: left; } th { background-color: #f2f2f2; }</style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const generateUPIUrl = () => {
    const pa = encodeURIComponent(upiId);
    const pn = encodeURIComponent(bookingDetails.name);
    const am = encodeURIComponent(bookingDetails.totalPrice);
    const cu = encodeURIComponent("INR");
    return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}`;
  };

  const formatCardNumber = (number) => {
    return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  if (!bookingDetails) {
    return <div className="container">No booking details found.</div>;
  }

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Details</h1>
      <div id="print-section" className="booking-details">
        <h3>Booking Summary</h3>
        <table className="table">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{bookingDetails.name}</td>
            </tr>
            <tr>
              <th>Room Type:</th>
              <td>{bookingDetails.type}</td>
            </tr>
            <tr>
              <th>Check-in:</th>
              <td>{bookingDetails.startDate}</td>
            </tr>
            <tr>
              <th>Check-out:</th>
              <td>{bookingDetails.endDate}</td>
            </tr>
            <tr>
              <th>Total Price:</th>
              <td>Rs {bookingDetails.totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="payment-method">
        <h3>Select Payment Method</h3>
        <div className="payment-options">
          <label>
            <input 
              type="radio" 
              value="UPI" 
              checked={paymentMethod === "UPI"} 
              onChange={() => setPaymentMethod("UPI")} 
            />
            UPI
          </label>
          <label>
            <input 
              type="radio" 
              value="Card" 
              checked={paymentMethod === "Card"} 
              onChange={() => setPaymentMethod("Card")} 
            />
            Credit/Debit Card
          </label>
        </div>
      </div>

      {paymentMethod === "UPI" && (
        <div className="upi-section">
          <label htmlFor="upiId">UPI ID:</label>
          <input 
            type="text" 
            id="upiId" 
            value={upiId} 
            readOnly 
          />
          <div className="qr-section">
            <h3>Scan this QR code to pay:</h3>
            <QRCodeSVG value={generateUPIUrl()} size={200} />
          </div>
        </div>
      )}

      {paymentMethod === "Card" && (
        <div className="card-section">
          <div className="card-preview">
            <div className="card-front">
              <div className="card-chip"></div>
              <div className="card-number">{cardNumber || "#### #### #### ####"}</div>
              <div className="card-holder-name">{cardHolderName || "Card Holder"}</div>
              <div className="card-expiry">{cardExpiry || "MM/YY"}</div>
            </div>
            <div className="card-back">
              <div className="card-cvc">{cardCvc || "###"}</div>
            </div>
          </div>

          <label htmlFor="cardHolderName">Card Holder's Name:</label>
          <input 
            type="text" 
            id="cardHolderName" 
            value={cardHolderName} 
            onChange={(e) => setCardHolderName(e.target.value)} 
            placeholder="Your Name" 
            required 
          />

          <label htmlFor="cardNumber">Card Number:</label>
          <input 
            type="text" 
            id="cardNumber" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} 
            placeholder="1234 5678 9012 3456" 
            required 
          />

          <label htmlFor="cardExpiry">Expiry Date (MM/YY):</label>
          <input 
            type="text" 
            id="cardExpiry" 
            value={cardExpiry} 
            onChange={(e) => setCardExpiry(e.target.value)} 
            placeholder="MM/YY" 
            required 
          />

          <label htmlFor="cardCvc">CVC:</label>
          <input 
            type="text" 
            id="cardCvc" 
            value={cardCvc} 
            onChange={(e) => setCardCvc(e.target.value)} 
            placeholder="123" 
            required 
          />
        </div>
      )}

      <center>
        <div className="button-container">
          {paymentMethod === "Card" && (
            <button onClick={handlePayment} className="btn btn-success">
              Confirm Payment
            </button>
          )}
          {paymentMethod === "UPI" && (
            <button onClick={handlePayment} className="btn btn-primary">
              Confirm Payment
            </button>
          )}
          <button onClick={handlePrint} className="btn btn-primary">
            Print Payment Details
          </button>
        </div>
      </center>

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
  <div className="modal-overlay">
    <div className={`modal-content confirmation-popup ${showConfirmationPopup ? 'show' : ''}`} style={{ textAlign: 'center' }}>
      <h2 className="confirmation-title">Booking Confirmed</h2>
      <p className="confirmation-message">Thank you for your reservation! We're excited to have you with us soon.</p>
      <button onClick={closePopup} className="btn btn-close">
       
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default PaymentPage;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { QRCodeSVG } from "qrcode.react";
// import './PaymentPage.css';

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { bookingDetails } = location.state || {};

//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [upiId] = useState("kartickeji@oksbi");
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardExpiry, setCardExpiry] = useState("");
//   const [cardCvc, setCardCvc] = useState("");
//   const [cardHolderName, setCardHolderName] = useState("");
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60); // 1 minute = 60 seconds

//   // Countdown timer
//   useEffect(() => {
//     if (timeLeft === 0) {
//       setShowConfirmationPopup(true); // Auto confirm payment when time is up
//     }

//     const timer = timeLeft > 0 && setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, [timeLeft]);

//   const handlePayment = () => {
//     if (paymentMethod === "UPI") {
//       setShowConfirmationPopup(true);
//     } else if (paymentMethod === "Card" && (!cardNumber || !cardExpiry || !cardCvc || !cardHolderName)) {
//       alert("Please fill in all card details.");
//       return;
//     } else {
//       setShowConfirmationPopup(true);
//     }
//   };

//   const closePopup = () => {
//     setShowConfirmationPopup(false);
//     navigate("/confirmation", { state: { bookingDetails } });
//   };

//   const handlePrint = () => {
//     const printContent = document.getElementById('print-section').innerHTML;
//     const printWindow = window.open('', '', 'height=600,width=800');
//     printWindow.document.write('<html><head><title>Print Payment Details</title>');
//     printWindow.document.write('<style>body { font-family: Arial, sans-serif; padding: 20px; } table { width: 100%; border-collapse: collapse; } th, td { padding: 8px; text-align: left; } th { background-color: #f2f2f2; }</style>');
//     printWindow.document.write('</head><body >');
//     printWindow.document.write(printContent);
//     printWindow.document.write('</body></html>');
//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.print();
//     printWindow.close();
//   };

//   const generateUPIUrl = () => {
//     const pa = encodeURIComponent(upiId);
//     const pn = encodeURIComponent(bookingDetails.name);
//     const am = encodeURIComponent(bookingDetails.totalPrice);
//     const cu = encodeURIComponent("INR");
//     return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}`;
//   };

//   const formatCardNumber = (number) => {
//     return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
//   };

//   if (!bookingDetails) {
//     return <div className="container">No booking details found.</div>;
//   }

//   return (
//     <div className="payment-container">
//       <h1 className="payment-title">Payment Details</h1>
//       <div id="print-section" className="booking-details">
//         <h3>Booking Summary</h3>
//         <table className="table">
//           <tbody>
//             <tr>
//               <th>Name:</th>
//               <td>{bookingDetails.name}</td>
//             </tr>
//             <tr>
//               <th>Room Type:</th>
//               <td>{bookingDetails.type}</td>
//             </tr>
//             <tr>
//               <th>Check-in:</th>
//               <td>{bookingDetails.startDate}</td>
//             </tr>
//             <tr>
//               <th>Check-out:</th>
//               <td>{bookingDetails.endDate}</td>
//             </tr>
//             <tr>
//               <th>Total Price:</th>
//               <td>Rs {bookingDetails.totalPrice}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="payment-method">
//         <h3>Select Payment Method</h3>
//         <div className="payment-options">
//           <label>
//             <input 
//               type="radio" 
//               value="UPI" 
//               checked={paymentMethod === "UPI"} 
//               onChange={() => setPaymentMethod("UPI")} 
//             />
//             UPI
//           </label>
//           <label>
//             <input 
//               type="radio" 
//               value="Card" 
//               checked={paymentMethod === "Card"} 
//               onChange={() => setPaymentMethod("Card")} 
//             />
//             Credit/Debit Card
//           </label>
//         </div>
//       </div>

//       {paymentMethod === "UPI" && (
//         <div className="upi-section">
//           <label htmlFor="upiId">UPI ID:</label>
//           <input 
//             type="text" 
//             id="upiId" 
//             value={upiId} 
//             readOnly 
//           />
//           <div className="qr-section">
//             <h3>Scan this QR code to pay:</h3>
//             <QRCodeSVG value={generateUPIUrl()} size={200} />
//           </div>
//         </div>
//       )}

//       {paymentMethod === "Card" && (
//         <div className="card-section">
//           <div className="card-preview">
//             <div className="card-front">
//               <div className="card-chip"></div>
//               <div className="card-number">{cardNumber || "#### #### #### ####"}</div>
//               <div className="card-holder-name">{cardHolderName || "Card Holder"}</div>
//               <div className="card-expiry">{cardExpiry || "MM/YY"}</div>
//             </div>
//             <div className="card-back">
//               <div className="card-cvc">{cardCvc || "###"}</div>
//             </div>
//           </div>

//           <label htmlFor="cardHolderName">Card Holder's Name:</label>
//           <input 
//             type="text" 
//             id="cardHolderName" 
//             value={cardHolderName} 
//             onChange={(e) => setCardHolderName(e.target.value)} 
//             placeholder="Your Name" 
//             required 
//           />

//           <label htmlFor="cardNumber">Card Number:</label>
//           <input 
//             type="text" 
//             id="cardNumber" 
//             value={cardNumber} 
//             onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} 
//             placeholder="1234 5678 9012 3456" 
//             required 
//           />

//           <label htmlFor="cardExpiry">Expiry Date (MM/YY):</label>
//           <input 
//             type="text" 
//             id="cardExpiry" 
//             value={cardExpiry} 
//             onChange={(e) => setCardExpiry(e.target.value)} 
//             placeholder="MM/YY" 
//             required 
//           />

//           <label htmlFor="cardCvc">CVC:</label>
//           <input 
//             type="text" 
//             id="cardCvc" 
//             value={cardCvc} 
//             onChange={(e) => setCardCvc(e.target.value)} 
//             placeholder="123" 
//             required 
//           />
//         </div>
//       )}

//       <center>
//         <div className="button-container">
//           {paymentMethod === "Card" && (
//             <button onClick={handlePayment} className="btn btn-success">
//               Confirm Payment
//             </button>
//           )}
//           {paymentMethod === "UPI" && (
//             <button onClick={handlePayment} className="btn btn-primary">
//               Confirm Payment
//             </button>
//           )}
//           <button onClick={handlePrint} className="btn btn-primary">
//             Print Payment Details
//           </button>
//         </div>
//       </center>

//       {/* Confirmation Popup */}
//       {showConfirmationPopup && (
//         <div className="modal-overlay">
//           <div className="modal-content confirmation-popup">
//             <h2 className="confirmation-title">Booking Confirmed</h2>
//             <p className="confirmation-message">Thank you for your reservation! We're excited to have you with us soon.</p>
//             <button onClick={closePopup} className="btn btn-close">Close</button>
//           </div>
//         </div>
//       )}

//       {/* Time Left Display */}
//       <div className="time-left">
//         <h4>Time left for payment: {timeLeft} seconds</h4>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

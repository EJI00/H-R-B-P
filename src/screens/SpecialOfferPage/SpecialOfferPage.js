import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './SpecialOfferPage.css'; // Include custom styles
import MyFooter from '../../components/Footer/MyFooter'; // Include your footer component

const SpecialOfferPage = () => {
  // Initialize navigate function
  const navigate = useNavigate();

  // Function to navigate to the rooms page
  const ss = () => {
    navigate('/rooms'); // Redirect to the rooms page
  };

  // Sample data for special offers
  const offers = [
    {
      id: 1,
      title: 'Summer Special Discount',
      description: 'Enjoy 30% off on all room bookings this summer. Book now and make the most of your vacation!',
      price: '₹3000/night',
      oldPrice: '₹4000/night',
      imageUrl: 'https://t3.ftcdn.net/jpg/03/66/07/96/240_F_366079600_wRdNvoGsGJ5J4IeZLA3P5wPQUkMwhzFT.jpg',
    },
    {
      id: 2,
      title: 'Weekend Getaway Package',
      description: 'Book your weekend escape with a complimentary breakfast for 2 and discounted spa services.',
      price: '₹2500/night',
      oldPrice: '₹3500/night',
      imageUrl: 'https://img.freepik.com/free-vector/welcome-back-typography-design-with-passengers_1308-91642.jpg?ga=GA1.1.1098124570.1729176049&semt=ais_hybrid',
    },
    {
      id: 3,
      title: 'Family Vacation Deal',
      description: 'Family packages with up to 40% off for 4 or more people. A great deal for family vacations!',
      price: '₹4500/night',
      oldPrice: '₹6000/night',
      imageUrl: 'https://img.freepik.com/free-photo/happy-family-wearing-superhero-costumes_53876-65671.jpg?ga=GA1.1.1098124570.1729176049&semt=ais_hybrid',
    },
  ];

  return (
    <div className="special-offer-container">
      <h1 className="special-offer-heading">Special Offers</h1>
      
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
            <h2 className="offer-title">{offer.title}</h2>
            <p className="offer-description">{offer.description}</p>
            <div className="price-container">
              <span className="offer-price">{offer.price}</span>
              <span className="offer-old-price">{offer.oldPrice}</span>
            </div>
            <button className="offer-book-now" onClick={ss}>Book Now</button>
          </div>
        ))}
      </div>
      
      <MyFooter />
    </div>
  );
};

export default SpecialOfferPage;

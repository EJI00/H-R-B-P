import React from "react";
import { FaUtensils, FaBed, FaStar, FaWindowMaximize } from "react-icons/fa"; // Use valid icons
import './ReviewsPage.css'; // CSS file for styling
import MyFooter from '../../components/Footer/MyFooter';

const ReviewsPage = () => {
  // Create an array of review data (could be fetched from a database)
  const guestReviews = [
    { name: "John Doe", foodRating: 5, accommodationRating: 4, roomRating: 5 },
    { name: "Jane Smith", foodRating: 4, accommodationRating: 5, roomRating: 4 },
    { name: "Michael Lee", foodRating: 5, accommodationRating: 5, roomRating: 5 },
  ];

  const staffReviews = [
    { name: "James", foodRating: 4, accommodationRating: 4, roomRating: 5 },
    { name: "Emily", foodRating: 5, accommodationRating: 5, roomRating: 4 },
    { name: "Sophia", foodRating: 3, accommodationRating: 4, roomRating: 5 },
  ];

  // Helper function to display star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar key={index} color={index < rating ? "#f39c12" : "#bdc3c7"} />
    ));
  };

  return (
    <div className="reviews-container">
      <h1 className="reviews-heading">Reviews</h1>

      {/* Guest Reviews Section */}
      <section className="reviews-section">
        <h2 className="section-heading"><FaStar /> Guest Reviews</h2>
        {guestReviews.map((review, index) => (
          <div key={index} className="review-category">
            <h3>{review.name}</h3>
            <div className="review-ratings">
              <p><FaUtensils /> Food: {renderStars(review.foodRating)}</p>
              <p><FaBed /> Accommodation: {renderStars(review.accommodationRating)}</p>
              <p><FaWindowMaximize /> Room: {renderStars(review.roomRating)}</p> {/* Replaced FaRegWindow */}
            </div>
          </div>
        ))}
      </section>

      {/* Staff Reviews Section */}
      <section className="reviews-section">
        <h2 className="section-heading"><FaStar /> Staff Reviews</h2>
        {staffReviews.map((review, index) => (
          <div key={index} className="review-category">
            <h3>{review.name}</h3>
            <div className="review-ratings">
              <p><FaUtensils /> Food: {renderStars(review.foodRating)}</p>
              <p><FaBed /> Accommodation: {renderStars(review.accommodationRating)}</p>
              <p><FaWindowMaximize /> Room: {renderStars(review.roomRating)}</p> {/* Replaced FaRegWindow */}
            </div>
          </div>
        ))}
      </section>
      <FaWindowMaximize /> {/* You can add the icon here as well */}

      <MyFooter />
    </div>
  );
};

export default ReviewsPage;

import React from "react";
import "./MissionPage.css";
import { FaHandHoldingHeart, FaRegStar, FaUsers, FaRocket, FaBuilding, FaShieldAlt } from "react-icons/fa";
import MyFooter from '../../components/Footer/MyFooter'
const MissionPage = () => {
  return (
    <div className="mission-container">
      <h1>Our Mission</h1>
      <p className="mission-description">
        At StayHubx, we are committed to redefining the way the world experiences hotel booking. Our mission is to create seamless, efficient, and memorable stays for all our guests, empowering hotel owners to manage operations effortlessly while delivering top-notch service.
      </p>

      <div className="mission-stats">
        <div className="stat-item">
          <FaHandHoldingHeart className="stat-icon" />
          <h3>Customer First</h3>
          <p>Our priority is always the satisfaction and happiness of our customers. We believe in building lasting relationships by providing exceptional experiences.</p>
        </div>

        <div className="stat-item">
          <FaRegStar className="stat-icon" />
          <h3>Excellence in Service</h3>
          <p>Our platform helps provide flawless service with real-time updates, easy booking options, and a user-friendly interface.</p>
        </div>

        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <h3>Global Reach</h3>
          <p>StayHubx aims to become a global leader in the hotel industry, offering our service to guests and hotel owners all around the world.</p>
        </div>
      </div>

      <h2 className="vision-heading">Our Vision</h2>
      
      <div className="vision-statement">
        <FaRocket className="vision-icon" />
        <p className="vision-description">
          We envision StayHubx as a platform that constantly evolves with technology to provide an even more personalized and accessible experience for every traveler and hotelier.
        </p>
      </div>

      <div className="vision-statement">
        <FaBuilding className="vision-icon" />
        <p className="vision-description">
          Our vision includes becoming the backbone of the hospitality industry, empowering hotel owners with easy-to-use tools that enhance operational efficiency and customer satisfaction.
        </p>
      </div>

      <div className="vision-statement">
        <FaShieldAlt className="vision-icon" />
        <p className="vision-description">
          We aim to provide a secure and transparent platform that guarantees the safety of both our users and hotel partners, fostering trust and reliability in every interaction.
        </p>
      </div>

      <h2 className="vision-heading">The Future of StayHubx</h2>
      <p className="mission-description">
        StayHubx will continue to innovate and adapt to the changing needs of the global hospitality industry. Our goal is to bridge the gap between hotel managers and guests, making booking, staying, and managing operations effortless and enjoyable.
      </p>

      <div className="mission-image">
        <img src="path_to_your_image.jpg" alt="Mission Image" />
      </div>

      <div className="closing-note">
        <p>Thank you for being part of our mission! Together, we can create an exceptional travel experience.</p>
      </div>
      <MyFooter/>
    </div>
  );
};

export default MissionPage;

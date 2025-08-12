import React from "react";
import "./OurStoryPage.css";
import { useNavigate } from "react-router-dom"; 
import MyFooter from '../../components/Footer/MyFooter';
import { FaRegLightbulb, FaHandsHelping, FaUserFriends, FaBuilding } from 'react-icons/fa'; // Importing icons

const OurStoryPage = () => {
  const navigate = useNavigate(); 

  const team = () => {
    navigate("/team");
  };

  return (
    <div className="our-story-container">
      <h1>Our Journey</h1>
      <p className="our-story-description">
        Welcome to StayHubx! Our journey began with a simple idea: to revolutionize the hotel room booking experience and make it as seamless and efficient as possible. From humble beginnings to where we are now, our story is one of dedication, technology, and innovation.
      </p>
      
      <h2><FaRegLightbulb /> The Inspiration Behind StayHubx</h2>
      <p className="our-story-description">
        StayHubx was created to address the challenges in the traditional hotel booking system. We wanted to bring a solution where both hotel owners and guests could experience a smoother process, reducing confusion and ensuring a great experience every time. Our founders, Trio's team, saw the potential for a booking platform that could simplify the complex management tasks for hotel staff while providing guests with real-time availability and an easy-to-use interface.
      </p>

      <h2><FaHandsHelping /> The Development of the System</h2>
      <p className="our-story-description">
        The journey to creating StayHubx wasn’t an easy one. We invested a significant amount of time in understanding the needs of both hotel owners and customers. Through countless iterations and feedback, we built a platform that includes powerful features such as real-time availability updates, easy room booking, and a robust management dashboard. The integration of technologies like React and Firebase allowed us to create a fast, responsive, and scalable platform for hotel room management.
      </p>

      <h2><FaBuilding /> Booking System Evolution</h2>
      <p className="our-story-description">
        Before the StayHubx booking system, managing hotel bookings was a tedious process that involved manual entries, inconsistent updates, and constant back-and-forth communication with guests. Our aim was to digitize and streamline these processes. The initial steps focused on integrating online payments, real-time booking management, and customer satisfaction tools. Today, StayHubx offers a fully integrated system with automatic room availability updates, user-friendly interfaces, and a transparent booking flow.
      </p>

      <h2><FaUserFriends /> Our Vision for the Future</h2>
      <p className="our-story-description">
        At StayHubx, we are always evolving. Our vision is to continuously innovate, providing hotel managers with more control over their operations and offering guests an even more personalized experience. We’re committed to building a platform that bridges the gap between hotels and their customers and ensures every stay is a memorable one.
      </p>
      
      <center>
        <button onClick={team}>Our Team</button>
      </center>
      
      <p className="closing-note">Thank you for being part of our journey. We look forward to hosting you!</p>
      <MyFooter/>
    </div>
  );
};

export default OurStoryPage;

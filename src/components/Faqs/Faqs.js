// Faqs.js
import React from 'react';
import MyCopyright from '../../components/Copyright/MyCopyright'
import MyFooter from '../../components/Footer/MyFooter'
import './Faqs.css';  // Importing CSS for styling

const Faqs = () => {
    return (
        <div className="faqs-container">
            <h1 className="faq-title">Frequently Asked Questions (FAQs)</h1>

            <div className="faq-section">
                <h2 className="faq-section-title">General Questions</h2>

                <div className="faq-item">
                    <h3>What time is check-in and check-out?</h3>
                    <p>Check-in starts at 3:00 PM, and check-out is by 11:00 AM.</p>
                </div>

                <div className="faq-item">
                    <h3>Do you offer free Wi-Fi?</h3>
                    <p>Yes, we offer complimentary high-speed Wi-Fi throughout the property.</p>
                </div>

                <div className="faq-item">
                    <h3>Is breakfast included?</h3>
                    <p>Yes, breakfast is included in most room packages. Please check your booking for confirmation.</p>
                </div>
            </div>

            <div className="faq-section">
                <h2 className="faq-section-title">Privacy & Security</h2>

                <div className="faq-item">
                    <h3>How do you ensure customer privacy?</h3>
                    <p>We prioritize your privacy by ensuring that all personal data is securely stored and processed in compliance with global privacy regulations, including GDPR.</p>
                </div>

                <div className="faq-item">
                    <h3>Is my credit card information secure?</h3>
                    <p>Yes, all credit card transactions are encrypted and handled through secure payment gateways, ensuring your sensitive information remains safe.</p>
                </div>

                <div className="faq-item">
                    <h3>Do you share customer information with third parties?</h3>
                    <p>No, we do not share your personal information with any third-party services, except where required by law or with your explicit consent.</p>
                </div>
            </div>

            <div className="faq-section">
                <h2 className="faq-section-title">Booking & Payments</h2>

                <div className="faq-item">
                    <h3>Can I modify or cancel my booking?</h3>
                    <p>You can modify or cancel your booking from your account dashboard. Please note that cancellation fees may apply based on the rate plan.</p>
                </div>

                <div className="faq-item">
                    <h3>What payment methods do you accept?</h3>
                    <p>We accept all major credit cards, debit cards, and some mobile payment methods like Apple Pay and Google Pay.</p>
                </div>
            </div>
            <MyFooter/>
            <MyCopyright/>
        </div>
        
    );
};

export default Faqs;

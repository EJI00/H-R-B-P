import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import MyFooter from '../../components/Footer/MyFooter';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalBookings: 0,
        availableRooms: 0,
        feedbacks: [],
        occupancyRate: 0
    });

    // Mock function simulating API call to fetch statistics
    useEffect(() => {
        // Fetch statistics here (replace with real API calls)
        const mockData = {
            totalBookings: 120,
            availableRooms: 50,
            feedbacks: [
                { user: "John Doe", feedback: "Great experience!", rating: 4 },
                { user: "Jane Smith", feedback: "Loved the room service.", rating: 5 }
            ],
            occupancyRate: 80 // In percentage
        };
        setStats(mockData);
    }, []);

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="stats-cards">
                <div className="card">
                    <h3>Total Bookings</h3>
                    <p>{stats.totalBookings}</p>
                </div>
                <div className="card">
                    <h3>Available Rooms</h3>
                    <p>{stats.availableRooms}</p>
                </div>
                <div className="card">
                    <h3>Occupancy Rate</h3>
                    <p>{stats.occupancyRate}%</p>
                </div>
            </div>

            <div className="feedback-section">
                <h3>Customer Feedback</h3>
                <ul>
                    {stats.feedbacks.map((fb, index) => (
                        <li key={index}>
                            <strong>{fb.user}</strong>: "{fb.feedback}" - {fb.rating}⭐
                        </li>
                    ))}
                </ul>
            </div>
            <MyFooter />
        </div>
    );
};

export default AdminDashboard;

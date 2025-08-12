import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Hardcoded admin credentials
    const adminEmail = "eji@gmail.com";
    const adminPassword = "1234";

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if entered credentials match the hardcoded ones
        if (email === adminEmail && password === adminPassword) {
            // Redirect to admin dashboard if credentials match
            navigate('/admin/dashboard');
        } else {
            // Show error message if credentials don't match
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    fullWidth
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Log In
                </Button>
            </form>
        </div>
    );
};

export default AdminLogin;

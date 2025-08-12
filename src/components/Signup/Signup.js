import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signup.css';
import { useNavigate } from 'react-router';
import { useUserAuth } from "../../Context/UserAuthContext";
import { Alert } from "react-bootstrap";
import MyFooter from "../Footer/MyFooter";
import MyCopyright from "../Copyright/MyCopyright";

const Signup = () => {
    const [userData, setUserData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: ""
    });

    const { signUp } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const postUserData = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form data
        if (userData.username === "" || userData.password === "" || userData.email === "" || userData.fullname === "") {
            alert("Please fill all the input fields");
            return;
        }

        try {
            setError(""); // Clear previous errors
            // Call sign-up function from context
            await signUp(userData.email, userData.password, userData.fullname, userData.username);
            navigate("/"); // Redirect to home page after successful signup
        } catch (err) {
            // Handle errors based on Firebase error codes
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered. Please try logging in or use a different email.");
            } else {
                setError(err.message); // Show other errors
            }
            console.log(err.message);
        }
    };

    return (
        <>
            <div className='signup-form-main'>
                <div className='signup-form-signup-div'>
                    <h1 className='signup-form-signup-heading'>Sign Up</h1>
                    {error && <Alert variant="danger">{error}</Alert>}  {/* Display error if present */}
                    <center>
                        <div>
                            <TextField 
                                label="Fullname" 
                                variant="standard" 
                                name="fullname" 
                                value={userData.fullname} 
                                onChange={postUserData} 
                                className="signup-form-input-fields" 
                                placeholder="Fullname"
                            />
                        </div>
                        <div>
                            <TextField 
                                label="Username" 
                                variant="standard" 
                                name="username" 
                                value={userData.username} 
                                onChange={postUserData} 
                                className="signup-form-input-fields" 
                            />
                        </div>
                        <div>
                            <TextField 
                                type="email" 
                                label="Email" 
                                variant="standard" 
                                name="email" 
                                value={userData.email} 
                                onChange={postUserData} 
                                className="signup-form-input-fields" 
                            />
                        </div>
                        <div>
                            <TextField 
                                type="password" 
                                label="Password" 
                                variant="standard" 
                                name="password" 
                                value={userData.password} 
                                onChange={postUserData} 
                                className="signup-form-input-fields" 
                            />
                        </div>
                        <Button 
                            variant="contained" 
                            className="signup-form-submit-btn" 
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                    </center>
                </div>
            </div>
            <MyFooter />
            <MyCopyright />
        </>
    );
}

export default Signup;
// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import './Signup.css';
// import { useNavigate } from 'react-router';
// import { Alert } from "react-bootstrap";
// import MyFooter from "../Footer/MyFooter";
// import MyCopyright from "../Copyright/MyCopyright";

// const Signup = () => {
//     const [userData, setUserData] = useState({
//         fullname: "",
//         username: "",
//         email: "",
//         password: ""
//     });

//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const postUserData = (event) => {
//         const { name, value } = event.target;
//         setUserData((prevState) => ({ ...prevState, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Validate form data
//         if (userData.username === "" || userData.password === "" || userData.email === "" || userData.fullname === "") {
//             alert("Please fill all the input fields");
//             return;
//         }

//         try {
//             setError(""); // Clear previous errors

//             // Prepare the data to send to the backend
//             const userPayload = {
//                 firstName: userData.fullname.split(" ")[0],  // Assuming first name is the first word
//                 lastName: userData.fullname.split(" ")[1],   // Assuming last name is the second word
//                 email: userData.email,
//                 password: userData.password
//             };

//             // Send POST request to backend
//             const response = await fetch("http://localhost:3030/api/auth/signup", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(userPayload),
//             });

//             if (response.ok) {
//                 // Redirect to home page after successful signup
//                 navigate("/");
//             } else {
//                 const errorData = await response.json();
//                 setError(errorData.message || "An error occurred. Please try again.");
//             }
//         } catch (err) {
//             setError("Something went wrong. Please try again later.");
//             console.log(err.message);
//         }
//     };

//     return (
//         <>
//             <div className='signup-form-main'>
//                 <div className='signup-form-signup-div'>
//                     <h1 className='signup-form-signup-heading'>Sign Up</h1>
//                     {error && <Alert variant="danger">{error}</Alert>}  {/* Display error if present */}
//                     <center>
//                         <div>
//                             <TextField 
//                                 label="Fullname" 
//                                 variant="standard" 
//                                 name="fullname" 
//                                 value={userData.fullname} 
//                                 onChange={postUserData} 
//                                 className="signup-form-input-fields" 
//                                 placeholder="Fullname"
//                             />
//                         </div>
//                         <div>
//                             <TextField 
//                                 label="Username" 
//                                 variant="standard" 
//                                 name="username" 
//                                 value={userData.username} 
//                                 onChange={postUserData} 
//                                 className="signup-form-input-fields" 
//                             />
//                         </div>
//                         <div>
//                             <TextField 
//                                 type="email" 
//                                 label="Email" 
//                                 variant="standard" 
//                                 name="email" 
//                                 value={userData.email} 
//                                 onChange={postUserData} 
//                                 className="signup-form-input-fields" 
//                             />
//                         </div>
//                         <div>
//                             <TextField 
//                                 type="password" 
//                                 label="Password" 
//                                 variant="standard" 
//                                 name="password" 
//                                 value={userData.password} 
//                                 onChange={postUserData} 
//                                 className="signup-form-input-fields" 
//                             />
//                         </div>
//                         <Button 
//                             variant="contained" 
//                             className="signup-form-submit-btn" 
//                             onClick={handleSubmit}
//                         >
//                             Sign Up
//                         </Button>
//                     </center>
//                 </div>
//             </div>
//             <MyFooter />
//             <MyCopyright />
//         </>
//     );
// }

// export default Signup;

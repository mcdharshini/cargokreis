import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '../Styles/Signup.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('');
    const [aadharno, setAadhar] = useState('');
    const [license, setLicense] = useState(''); //
    const [rememberMe, setRememberMe] = useState(false); // Define rememberMe state
    const [error, setError] = useState(''); // Define error state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email,
            phoneno: phoneNumber, // Use phoneNumber state
            username,
            password,
            usertype,
            aadharno,
            liscenceno: license // Use license state
        };

        console.log('User object:', user); // Confirm the object structure

        try {
            const response = await axios.post(`http://localhost:9001/truck/register`, user);
            console.log('User registered successfully:', response.data);
            if (usertype === 'customer') {
                navigate('/');
            } else if (usertype === 'driver') {
                navigate('/home2');
            }
        } catch (error) {
            console.error('There was an error registering the user!', error);
            setError('There was an error registering the user!'); // Set the error state
            alert('There was an error registering the user!');
        }
    };

    return (
        <div className="login-container2-signup">
            <div className='login-form2-signup'>
                {/* <Navbar/> */}
                <form onSubmit={handleSubmit} className="form-box1-signup">
                    <h2 className='welcome-signup'>Register</h2>
                    <h6 className='welcome2-signup'>Please enter your details</h6>
                    {error && <p className="error-signup">{error}</p>} {/* Display the error message */}

                    <div className="form-group-signup" style={{ display: 'flex' }}>
                        <div style={{ flex: '40%' }}>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group-signup" style={{ flex: '60%',marginLeft:'-10vh' }}>
                            <label>Phone No:</label>
                            <input
                                type="text"
                                value={phoneNumber} // Use phoneNumber state
                                onChange={(e) => setPhoneNumber(e.target.value)} // Use setPhoneNumber state
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group-signup" style={{ display: 'flex' }}>
                        <div style={{ flex: '50%' }}>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group-signup" style={{ flex: '50%',marginLeft:'-14vh' }}>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group-signup" >
                        <label htmlFor='type'>User Type:</label><br/>
                        <select
                            value={usertype}
                            onChange={(e) => setUsertype(e.target.value)}
                            required
                        >
                            <option value="">Select</option>
                            <option value="customer">Customer</option>
                            <option value="driver">Driver</option>
                        </select>
                    </div>

                    {usertype === 'customer' && (
                        <div className="form-group-signup" style={{flex: '50%'}}>
                            <label>Aadhar No. :</label><br/>
                            <input
                                type="text"
                                value={aadharno} // Use aadharno state
                                onChange={(e) => setAadhar(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {usertype === 'driver' && (
                        <div className="form-group-signup" style={{flex: '50%'}}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: '50%' }}>
                                    <label>Aadhar No.:</label>
                                    <input
                                        type="text"
                                        value={aadharno} // Use aadharno state
                                        onChange={(e) => setAadhar(e.target.value)}
                                        required
                                    />
                                </div>
                                <br></br>
                                <div style={{ flex: '50%' }}>
                                    <label>License No.:</label>
                                    <input
                                        type="text"
                                        value={license} // Use license state
                                        onChange={(e) => setLicense(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    
                    <button className='signup-button-signup' type="submit">Signup</button>
                    <p className='signup-signup'>Already have an account? <a className='sign-signup' href="/">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;

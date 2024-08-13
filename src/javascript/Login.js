import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import axios from 'axios';


const Login = ({onClose}) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            console.log("Enter correct credentials");
        } else {
            try {
                const response = await axios.post('http://localhost:9001/truck/login', { username, password });
                const userType = response.data.usertype;
                const id = response.data.id;

                sessionStorage.setItem('id',id);

                console.log(userType);
                if (userType === 'customer') {
                    navigate('/signup');
                } else if (userType === 'driver') {
                    navigate('/home2');
                }
            } catch (error) {
                console.error('Login failed:', error.response ? error.response.data : error.message);
                alert("Enter correct credentials");
            }
        }
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div>
            <div className="login-content">
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="form-box">
                        <h2 className='welcome'>Welcome back</h2>
                        <h6 className='welcome2'>Welcome back! Please enter your details</h6>
                        {error && <p className="error">{error}</p>}
                        <div className="form-group">
                            <label>User Name:</label>
                            <input
                                type="type"
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-options">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                Remember Me
                            </label>
                            <a className='forgot-password' href="/forgot-password">Forgot Password?</a>
                        </div>
                        <button className='loginp1' type="submit" >Login</button>
                        <p className='signup'>Don't have an account? <Link to="/signup" className='sign'>Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

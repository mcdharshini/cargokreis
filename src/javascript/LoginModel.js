import React from 'react';
import '../Styles/LoginModel.css';
import Login from './Login';

const LoginModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>×</button>
                <Login onClose={onClose}/>
            </div>
        </div>
    );
};

export default LoginModal;

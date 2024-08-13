import React from 'react';

function Retrieve() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <img src="/path/to/your/image.png" alt="Retrieve Booking" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
            <div style={{ marginTop: '-150px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h1>Manage My Booking</h1>
                <p>View your booking details by entering the fields below. You will find your booking number in your confirmation email or on your ticket.</p>
                <div style={{ marginTop: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                        Booking Number
                        <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', marginTop: '5px' }} />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                        Email or Phone Number
                        <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', marginTop: '5px' }} />
                    </label>
                    <button 
                        style={{ 
                            padding: '10px 20px', 
                            backgroundColor: '#ffcc00', 
                            border: 'none', 
                            borderRadius: '4px', 
                            cursor: 'pointer', 
                            fontSize: '1em', 
                            marginTop: '10px' 
                        }}
                    >
                        Retrieve Booking
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Retrieve;

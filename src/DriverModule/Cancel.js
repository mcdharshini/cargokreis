import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cancel() {
    const navigate = useNavigate();

    const handleCancellationClick = () => {
        navigate('/retrieve');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Cancellation Policy</h1>
            <p>Change of plans? No problem! With our service, you can cancel your booking up to 15 minutes before the scheduled time and get a full or partial refund in the form of a coupon.</p>
            <p>The table below shows how much you will be refunded. The amount depends on how far in advance you cancel your booking. For example, if you cancel 1 day and 3 hours before the scheduled time, you will get a 50% refund. The calculation is based on the exact time of the scheduled service (hour, minute, second).</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Time before scheduled service</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Refund (% of service price)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '8px' }}>Less than 1 day</td>
                        <td style={{ padding: '8px' }}>25%</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '8px' }}>Between 1 and 6 days</td>
                        <td style={{ padding: '8px' }}>50%</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '8px' }}>Between 7 and 14 days</td>
                        <td style={{ padding: '8px' }}>75%</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px' }}>14 days or more</td>
                        <td style={{ padding: '8px' }}>100%</td>
                    </tr>
                </tbody>
            </table>
            <p>Please note that for extras like seat reservations and additional luggage, the refund is 100%. Booking fees and service fees are non-refundable.</p>
            <p>Find more information in our <a href="/terms-and-conditions" style={{ color: '#007bff' }}>terms & conditions</a>.</p>
            <button 
                onClick={handleCancellationClick} 
                style={{ 
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                }}
            >
                Retrieve Booking
            </button>
        </div>
    );
}

export default Cancel;

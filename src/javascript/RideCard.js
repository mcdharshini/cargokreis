import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/RideCard.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupIcon from '@mui/icons-material/Group';

function RideCard({ ride }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/findride', { state: { ride:ride } });
    };

    const {
        startDate = "N/A",
        endDate = "N/A",
        startLocation = "N/A",
        endLocation = "N/A",
        driverName = "N/A",
        driverRating = "4.5",
        bookingType = "Instant booking",
        price = "N/A"
    } = ride;

    return (
        <div className="ride-card" onClick={handleClick}>
            <div className="ride-details">
                <div className="ride-date">
                    <span style={{ fontSize: '1.4rem' }}>{ride.startDate} -------</span>
                        
                    {/* <ArrowRightAltIcon style={{ margin: '0 10px' }} /> */}
                    <span style={{ fontSize: '1.4rem' }}>{endDate}</span>
                </div>
                <div className="ride-route">
                    <span>{ride.startingaddress}</span>
                    <ArrowRightAltIcon style={{ margin: '0 5px' }} />
                    <span>{ride.destinationaddress}</span>
                </div>
                <div className="ride-driver">
                    <AccountCircleIcon />
                    <span className="driver-name">{ride.model.username}</span>
                    <StarIcon className="driver-rating-icon" />
                    <span className="driver-rating">{driverRating}</span>
                    <BoltIcon className="booking-type-icon" />
                    <span className="booking-type">{bookingType}</span>
                    <GroupIcon className="max-people-icon" />
                    <span className="max-people">Max {ride.availablegoodsweight} tons</span>
                </div>
            </div>
            <div className="ride-price">
                <span>₹{price}</span>
            </div>
        </div>
    );
}

export default RideCard;

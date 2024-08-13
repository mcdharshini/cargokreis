import React from 'react';
import styled from '@emotion/styled';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 10px;
    width: 100%;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
`;

const Location = styled.span`
    font-size: 1.2em;
    margin: 0 10px;
`;

const Date = styled.span`
    font-size: 1em;
    color: #666;
`;

const Price = styled.span`
    font-size: 1.2em;
    color: #28a745;
`;

const TripCard = ({ trip }) => {
    return (
        <Card>
            <Info>
                <Location>{trip.startLocation}</Location>
                <ArrowRightAltIcon />
                <Location>{trip.endLocation}</Location>
            </Info>
            <div>
                <Date>{trip.date}</Date>
                <Price>₹{trip.price}</Price>
            </div>
        </Card>
    );
};

export default TripCard;

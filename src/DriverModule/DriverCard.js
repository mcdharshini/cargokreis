import React from 'react';
import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Card = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 100%;
`;

const Info = styled.div`
    margin-left: 20px;
`;

const Name = styled.h3`
    margin: 0;
    font-size: 1.5em;
`;

const Details = styled.p`
    margin: 5px 0;
    font-size: 1em;
`;

const DriverCard = () => {
    return (
        <Card>
            <AccountCircleIcon style={{ fontSize: '4em' }} />
            <Info>
                <Name>John Doe</Name>
                <Details>Email: johndoe@example.com</Details>
                <Details>Phone: (123) 456-7890</Details>
                <Details>Vehicle: Toyota Camry</Details>
            </Info>
        </Card>
    );
};

export default DriverCard;

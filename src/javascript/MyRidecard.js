import React from 'react';
import styled from "@emotion/styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import tuckimg from '../Assets/image5.png';

const Card = styled.div`
    background-color: white;
    margin: 30px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 8px;
    display: flex;
    align-items: center;
`;

const Status = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    color: #77a5d6;
    margin-left: 100px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const Time = styled.div`
    font-size: 1.2em;
    font-weight: bold;
`;

const Route = styled.div`
    display: flex;
    margin-top: 5px;
`;

const Location = styled.span`
    margin-right: 10px;
`;

const Duration = styled.span`
    color: #77a5d6;
    font-size: 0.8em;
`;

const Driver = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Name = styled.span`
    font-weight: bold;
`;

const Image = styled.img`
    width: 100px;
    height: 110px;
    margin-right: 20px;
    // border-radius: 50%;
`;

export default function MyRideCard({ myride }) {
    return (
        <Card>
            <Image src={tuckimg} alt="Driver Image" />
            <Info>
                <Time>{myride.departureTime} <Duration>---{myride.duration}---</Duration> {myride.arrivalTime}</Time>
                <Route>
                    <Location>{myride.departure}</Location>
                    <ArrowRightAltIcon style={{ margin: '0 5px' }} />
                    <Location>{myride.arrival}</Location>
                </Route>
                <br />
                <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh',color:'#77a5d6' }} />
                <br />
                <Driver>
                    <LocalShippingIcon />
                    <AccountCircleIcon style={{ paddingLeft: '20px',color:'#77a5d6' }} />
                    <Name>{myride.drivername}</Name>
                </Driver>
            </Info>
            <Status>
                {myride.status}
            </Status>
        </Card>
    );
}

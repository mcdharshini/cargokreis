import React from 'react';
import styled from '@emotion/styled';
import TripCard from './TripCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const trips = [
    { id: 1, startLocation: 'coimbatore', endLocation: 'bangalore', date: '2024-08-01', price: 500 },
    { id: 2, startLocation: 'delhi', endLocation: 'Lucknow', date: '2024-08-02', price: 600 },
    { id: 3, startLocation: 'Chennai', endLocation: 'Bangalore', date: '2024-08-03', price: 700 },
];

const RecentTrips = () => {
    return (
        <Container>
            {trips.map(trip => (
                <TripCard key={trip.id} trip={trip} />
            ))}
        </Container>
    );
};

export default RecentTrips;

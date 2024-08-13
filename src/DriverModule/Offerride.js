import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavbarDriver from '../DriverModule/NavbarDriver';

// Import the image from the assets folder
import backgroundImg from '../Assets/truckk1.avif';
import Footer from '../javascript/Footer';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImg});
    background-size: 500px;
    background-size:cover;
    background-position: center;
`;

const Overlay = styled.div`
    // background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 135%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Form = styled.form`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.4);
    border-radius: 12px;
    width: 500px;
    height: 740px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    // z-index: 1;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 20px;
`;

const Label = styled.label`
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
`;

const Input = styled.input`
    width: 80%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    width: 60%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    background-color: #28a745;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2em;
    width: 200px;
    margin-top: 20px;

    &:hover {
        background-color: #218838;
    }
`;

const Title = styled.h1`
    color: white;
    padding: 10px;
    text-align: center;
    position: relative;
    z-index: 1;
`;

const OfferRide = () => {
    const [startingaddress, setStartLocation] = useState('');
    const [destinationaddress, setEndLocation] = useState('');
    const [ startDate,setStartDate]=useState('');
    const [ endDate,setendDate]=useState('');
    const [availablegoodsweight,setGoodsweight]=useState('');
    const [availablespace,setGoodsSpace]=useState('');
    const [price, setPrice] = useState('');
    const[status,setStatus]=useState('Yet to start');

    const handlesubmit = (e) => {
        e.preventDefault();
        const loginId = sessionStorage.getItem('id');
        const data = {
            startingaddress,
            destinationaddress,
            startDate,
            endDate,
            availablegoodsweight,
            availablespace,
            loginId,
            price,
            status
        };
        console.log(data);

        axios.post('http://localhost:9001/truck/shipment', data)
            .then(response => {
                console.log('Data submitted successfully:', response.data);
                alert("Ride added successfully");
            })
            .catch(error => {
                console.error('There was an error submitting the data!', error);
            });
    };
    return (
        <div style={{height:'930px'}}>
        <Container style={{height:'920px'}}>
            <Overlay />
            {/* <NavbarDriver /> */}
            <Title>Offer a Ride for Goods Sharing</Title>
            <Form onSubmit={handlesubmit}>
                <FormGroup>
                    <Label>Start Location:</Label>
                    <Input
                        type="text"
                        value={startingaddress}
                        onChange={(e) => setStartLocation(e.target.value)}
                        placeholder="Enter start location"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>End Location:</Label>
                    <Input
                        type="text"
                        value={destinationaddress}
                        onChange={(e) => setEndLocation(e.target.value)}
                        placeholder="Enter end location"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Start Date:</Label>
                    <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>End Date:</Label>
                    <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setendDate(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Available Goods Weight:</Label>
                    <Input
                        type="text"
                        value={availablegoodsweight}
                        onChange={(e) => setGoodsweight(e.target.value)}
                        required
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label>Available Goods Space:</Label>
                    <Input
                        type="text"
                        value={availablespace}
                        onChange={(e) => setGoodsSpace(e.target.value)}
                        required
                    />
                </FormGroup>
                
                
                {/* <FormGroup>
                    <Label>Goods Description:</Label>
                    <TextArea
                        value={goodsDescription}
                        onChange={(e) => setGoodsDescription(e.target.value)}
                        placeholder="Describe the goods you will be transporting"
                        required
                    />
                </FormGroup> */}
                <FormGroup>
                    <Label>Price:</Label>
                    <Input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                        required
                    />
                </FormGroup>
                <Button type="submit">Offer Ride</Button>
            </Form>
        </Container><br/>
        {/* <Footer/> */}
        </div>
        
    );
};

export default OfferRide;

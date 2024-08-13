// FindRide.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ScaleIcon from '@mui/icons-material/Scale';
import img1 from '../Assets/truck1.jpg';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
`;

const FormContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -40px;
`;

const Form = styled.form`
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 8px;
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
    margin:10px 25px 10px 25px;
`;

const FormGroupRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    width: 200px;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;

export default function FindRide() {
    const location = useLocation();
    const ride = location.state?.ride || [];
    const shipmentId = ride.shipmentId;
    const loginId = sessionStorage.getItem('id');
    const navigate = useNavigate();
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [Rname, setRname] = useState('');
    const [Rnumber, setRnumber] = useState('');
    const [Typegoods, setTypeGoods] = useState('');
    const [Weightgoods, setWeightGoods] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(Typegoods,
                Weightgoods,
                departure,
                arrival,
                Rname,
                Rnumber,
                loginId,
                shipmentId);
            const response = await axios.post(`http://localhost:9001/truck/findride`, {
                Typegoods,
                Weightgoods: parseFloat(Weightgoods),
                departure,
                arrival,
                Rname,
                Rnumber,
                loginId,
                shipmentId
            });

            console.log("Data Submitted", response.data);
            alert("Submission Successful. Waiting for confirmation.");
        } catch (error) {
            if (error.response) {
                console.error("Error response data:", error.response);
                alert(`Error: ${error.response.status} - ${error.response.data.message || 'An error occurred'}`);
            } else if (error.request) {
                console.error("Error request data:", error.request);
                alert("No response received from the server.");
            } else {
                console.error("Error", error.message);
                alert("An error occurred while setting up the request.");
            }
            console.error("Error config:", error.config);
        }
    };

    return (
        <div>
            <Navbar />
            <Container>
                <ImageContainer>
                    <img src={img1} alt='Goods' style={{ height: '100%', maxHeight: '600px', width: '200%', maxWidth: '800px' }} />
                </ImageContainer>
                <FormContainer>
                    <FormWrapper>
                        <h1 style={{ textAlign: 'center' }}>Enter Your Goods Details</h1>
                        <Form onSubmit={handleSubmit}>
                            <FormGroupRow>
                                <FormGroup style={{ marginRight: '10px' }}>
                                    <Label><LocationOnIcon /> Departure Location:</Label>
                                    <Input
                                        type="text"
                                        value={departure}
                                        onChange={(e) => setDeparture(e.target.value)}
                                        placeholder="Enter departure location"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label><LocationOnIcon /> Arrival Location:</Label>
                                    <Input
                                        type="text"
                                        value={arrival}
                                        onChange={(e) => setArrival(e.target.value)}
                                        placeholder="Enter arrival location"
                                        required
                                    />
                                </FormGroup>
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormGroup style={{ marginRight: '10px' }}>
                                    <Label><LocalShippingIcon /> Type of Goods:</Label>
                                    <Input
                                        type="text"
                                        value={Typegoods}
                                        onChange={(e) => setTypeGoods(e.target.value)}
                                        placeholder="Enter type of goods"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label><ScaleIcon /> Goods Weight:</Label>
                                    <Input
                                        type="number"
                                        value={Weightgoods}
                                        onChange={(e) => setWeightGoods(e.target.value)} 
                                        placeholder="Enter goods weight"
                                        required
                                    />
                                </FormGroup>
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormGroup style={{ marginRight: '10px' }}>
                                    <Label><PersonIcon /> Receiver Name:</Label>
                                    <Input
                                        type="text"
                                        value={Rname}
                                        onChange={(e) => setRname(e.target.value)}
                                        placeholder="Enter receiver name"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label><LocalPhoneIcon /> Receiver number:</Label>
                                    <Input
                                        type="text"
                                        value={Rnumber}
                                        onChange={(e) => setRnumber(e.target.value)}
                                        placeholder="Enter receiver phone number"
                                        required
                                    />
                                </FormGroup>
                            </FormGroupRow>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </FormWrapper>
                </FormContainer>
            </Container>
            <Footer />
        </div>
    );
}

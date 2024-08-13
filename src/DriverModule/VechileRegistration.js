import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavbarDriver from '../DriverModule/NavbarDriver';
import Footer from '../javascript/Footer';
import axios from 'axios';
import backgroundImg from '../Assets/girldriver2.avif'

const PageContainer = styled.div`
    display: flex;
    height: 100vh;
`;

const ImageContainer = styled.div`
    flex: 1;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
`;

const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    // background-color: #f7f7f7;
`;

const Form = styled.form`
    background-color: white;
    padding: 1  0px;
    // box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 8px;
    width: 80%; /* Reduced width for better alignment */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 80%;
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
    width: 30%;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;

export default function VehicleRegistration() {
    const [truckno, setTruckno] = useState("");
    const [chasisno, setChasisno] = useState("");
    const [insuranceno, setInsuranceno] = useState("");
    const [ownername, setOwnername] = useState("");
    const [ownermno, setOwnermno] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginId = sessionStorage.getItem('id');
        try {
            const response = await axios.post('http://localhost:9001/truck/registervehicle', {
                truckno,
                chasisno,
                insuranceno,
                ownername,
                ownermno,
                loginId // Pass loginId to backend
            });
            console.log("Vehicle registered successfully:", response.data);
            alert("Vehicle registered successfully");
        } catch (error) {
            console.error('Vehicle registration failed:', error.response ? error.response.data : error.message);
            alert("Vehicle registration failed");
        }
    };

    return (
        <div>
            <NavbarDriver />
            <PageContainer>
                <ImageContainer />
                <FormContainer>
                    <br/>
                    <h1 style={{ padding: '30px' }}>Register Your Vehicle</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Truck No:</Label>
                            <Input
                                value={truckno}
                                onChange={(e) => setTruckno(e.target.value)}
                                placeholder="Enter Truck no "
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Truck Chasis No:</Label>
                            <Input
                                type="text"
                                value={chasisno}
                                onChange={(e) => setChasisno(e.target.value)}
                                placeholder="Enter truck chasis no"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Insurance No:</Label>
                            <Input
                                type="text"
                                value={insuranceno}
                                onChange={(e) => setInsuranceno(e.target.value)}
                                placeholder="Enter Insurance number"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Owner Name:</Label>
                            <Input
                                type="text"
                                value={ownername}
                                onChange={(e) => setOwnername(e.target.value)}
                                placeholder="Enter owner name"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Owner No:</Label>
                            <Input
                                type="text"
                                value={ownermno}
                                onChange={(e) => setOwnermno(e.target.value)}
                                placeholder="Enter owner no."
                                required
                            />
                        </FormGroup>
                        <Button type="submit">Register Vehicle</Button>
                    </Form>
                </FormContainer>
            </PageContainer>
            <Footer />
        </div>
    );
}

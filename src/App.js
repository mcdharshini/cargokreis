import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './javascript/HomePage';
import Login from './javascript/Login';
import Signup from './javascript/Signup';
import SearchNext from './javascript/SearchNext';
import About from './javascript/About';
import Myride from './javascript/MyRide';
import FindRide from './javascript/Findride';
import SearchRide from './javascript/SearchRide';
import D_Home from './DriverModule/D_Home';
import Myrides from './DriverModule/MyRides';
import OfferRide from './DriverModule/Offerride';
import VehicleRegistration from './DriverModule/VechileRegistration';
import Aboutdriver from './DriverModule/Aboutdriver';
import MainLayout from './javascript/Layout'; // New layout component
import Ridedetails from './javascript/RideDetails';
import DriverPage from './DriverModule/DriverPage';
import Retrieve from './DriverModule/Retrieve';
import CancelPage from './DriverModule/Cancel';


const sampleRides = [
    {
        startTime: "04:00",
        endTime: "10:10",
        duration: "6h10m",
        startLocation: "Sultanpet",
        endLocation: "Bhovi Palya",
        driverName: "Giri",
        bookingType: "Instant Booking",
        price: 800
    },
    {
        startTime: "06:30",
        endTime: "13:20",
        duration: "6h50m",
        startLocation: "Karamadai",
        endLocation: "Bengaluru",
        driverName: "Prabhu",
        bookingType: "Max. 2 in the back",
        price: 790
    },
    {
        startTime: "08:00",
        endTime: "14:10",
        duration: "6h10m",
        startLocation: "Ooty",
        endLocation: "Mysore",
        driverName: "Ravi",
        bookingType: "Instant Booking",
        price: 850
    }
];

const App = () => {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/searchnext" element={<SearchNext />} />
                <Route path="/about" element={<About />} />
                <Route path="/myride" element={<Myride />} />
                <Route path="/findride" element={<FindRide />} />
                <Route path="/searchride" element={<SearchRide />} />
                <Route path="/rides" element={<MainLayout rides={sampleRides} />} /> {/* Link to MainLayout */}
                <Route path='/home2' element={<D_Home />} />
                <Route path="/myriders" element={<Myrides />} />
                <Route path="/offerride" element={<OfferRide />} />
                <Route path="/VechileReg" element={<VehicleRegistration />} />
                <Route path="/aboutdr" element={<Aboutdriver />} />
                <Route path='/ridedetail/:id' element={<Ridedetails/>}/>
                <Route path='/driverpage' element={<DriverPage/>}/>
                
                <Route path="/retrieve" component={<Retrieve/>} />
                <Route path="/cancel" component={<CancelPage/>} />
                
                
            </Routes>
        </Router>
    );
};

export default App;

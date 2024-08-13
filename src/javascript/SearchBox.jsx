import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/Searchbox.css';
import axios from 'axios';

const Searchbox = ({ setrides }) => {
    const [startingaddress, setStartingaddress] = useState('');
    const [destinationaddress, setDestinationaddress] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    
    // const [rides, setRides] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        const utcStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];
        try {
          const response = await axios.post('http://localhost:9001/truck/getshipmentdetail', {
              startingaddress,
              destinationaddress,
              startDate: utcStartDate     
              // startDate: startDate.toISOString().split('T')[0]     
          });
          console.log(response.data);
          navigate('/searchride', { state: { rides: response.data } });
        } catch (error) {
          console.error('Error fetching rides', error);
          alert("Error");
        }
      };
    

    return (
        <div className="search-box-container">
            <div className="input-group">
                <FaMapMarkerAlt className="icon" />
                <input 
                    type="text"
                    placeholder="Leaving from"
                    value={startingaddress}
                    onChange={(e) => setStartingaddress(e.target.value)}
                />
            </div>
            <div className="input-group">
                <FaMapMarkerAlt className="icon" />
                <input
                    type="text"
                    placeholder="Going to"
                    value={destinationaddress}
                    onChange={(e) => setDestinationaddress(e.target.value)}
                />
            </div>
            <div className="input-group">
                <CalendarTodayIcon className="icon" />
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    customInput={<input placeholder="Today" />}
                />
            </div>
            <button className="search-button" onClick={handleSearch}>
                <SearchIcon />
                Search
            </button>
        </div>
    );
};

export default Searchbox;

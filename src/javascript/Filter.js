import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Slider } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import '../Styles/Filter.css';

function Filter({ filters, setFilters }) {
    const [showDriverName, setShowDriverName] = useState(false);
    const [showMinRating, setShowMinRating] = useState(false);
    const [showStartDate, setShowStartDate] = useState(false);
    const [showMaxPrice, setShowMaxPrice] = useState(false);
    const [showBookingType, setShowBookingType] = useState(false);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        switch (name) {
            case 'showDriverName':
                setShowDriverName(checked);
                break;
            case 'showMinRating':
                setShowMinRating(checked);
                break;
            case 'showStartDate':
                setShowStartDate(checked);
                break;
            case 'showMaxPrice':
                setShowMaxPrice(checked);
                break;
            case 'showBookingType':
                setShowBookingType(checked);
                break;
            default:
                break;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSliderChange = (name) => (event, newValue) => {
        setFilters(prev => ({
            ...prev,
            [name]: newValue
        }));
    };

    const handleClearAll = () => {
        setShowDriverName(false);
        setShowMinRating(false);
        setShowStartDate(false);
        setShowMaxPrice(false);
        setShowBookingType(false);
        setFilters({
            driverName: '',
            minRating: 0,
            startDate: '',
            maxPrice: 10000,
            bookingType: ''
        });
    };

    return (
        <div className="filter">
            <div className="filter-header">
                <h3>Filter Rides</h3>
                <button className="clear-all-button" onClick={handleClearAll}>
                    <ClearAllIcon /> Clear all
                </button>
            </div>
            <FormControlLabel
                control={<Checkbox checked={showDriverName} onChange={handleCheckboxChange} name="showDriverName" />}
                label={<span>Driver Name <AccountCircle style={{marginLeft:'100px'}}/></span>}
            />
            {showDriverName && (
                <label className="input-field">
                    <input
                        type="text"
                        name="driverName"
                        value={filters.driverName}
                        onChange={handleChange}
                    />
                </label>
            )}

            <FormControlLabel
                control={<Checkbox checked={showMinRating} onChange={handleCheckboxChange} name="showMinRating" />}
                label={<span>Minimum Rating 
                    <StarIcon style={{marginLeft:'80px'}}/>
                    </span>}
            />
            {showMinRating && (
                <label className="input-field">
                    <Slider
                        value={filters.minRating}
                        onChange={handleSliderChange('minRating')}
                        valueLabelDisplay="auto"
                        min={0}
                        max={5}
                        step={0.1}
                    />
                </label>
            )}

            <FormControlLabel
                control={<Checkbox checked={showStartDate} onChange={handleCheckboxChange} name="showStartDate" />}
                label={<span>Start Date <CalendarTodayIcon  style={{marginLeft:'120px'}}/></span>}
            />
            {showStartDate && (
                <label className="input-field">
                    <input
                        type="date"
                        name="startDate"
                        value={filters.startDate}
                        onChange={handleChange}
                    />
                </label>
            )}
            <br></br>

            <FormControlLabel
                control={<Checkbox checked={showMaxPrice} onChange={handleCheckboxChange} name="showMaxPrice" />}
                label={<span>Max Price <AttachMoneyIcon style={{marginLeft:'120px'}} /></span>}
            />
            {showMaxPrice && (
                <label className="input-field">
                    <Slider
                        value={filters.maxPrice}
                        onChange={handleSliderChange('maxPrice')}
                        valueLabelDisplay="auto"
                        min={0}
                        max={10000}
                    />
                </label>
            )}
            <br></br>

            <FormControlLabel
                control={<Checkbox checked={showBookingType} onChange={handleCheckboxChange} name="showBookingType" />}
                label="Booking Type"
            />
            {showBookingType && (
                <label className="input-field">
                    <select
                        name="bookingType"
                        value={filters.bookingType}
                        onChange={handleChange}
                    >
                        <option value="">All</option>
                        <option value="Instant Booking">Instant Booking</option>
                        <option value="Advanced Booking">Advanced Booking</option>
                    </select>
                </label>
            )}
        </div>
    );
}

export default Filter;

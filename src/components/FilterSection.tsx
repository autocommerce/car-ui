'use client';
import React, { useState } from 'react';
import { Box, TextField, MenuItem, Slider, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchButton from './SearchButton';

const carTypes = ['SUV', 'Sedan', 'Convertible'];
const motorTypes = ['Electric', 'Hybrid', 'Gasoline'];
const priceRange = { min: 500, max: 100000 };

const carThumbStyles = {
    width: '32px',
    height: '32px',
    cursor: 'grab',
    marginTop: '-5px',
    color: 'black',
    background: 'transparent',
    border: 'none'
};

export default function FilterSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCarType, setSelectedCarType] = useState('');
    const [selectedMotorType, setSelectedMotorType] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(priceRange.min);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSelectedPrice(newValue as number);
    };
    const handleSearch = () => {
        console.log('Search:', {
            searchTerm,
            selectedCarType,
            selectedMotorType,
            selectedPrice
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%',
                p: 2,

                background: 'white',
                border: '2px dashed grey',
                borderRadius: '5px'
            }}
        >
            <TextField
                label="Search car..."
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                select
                label="Select Car Type"
                value={selectedCarType}
                onChange={(e) => setSelectedCarType(e.target.value)}
                sx={{ mb: 2 }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {carTypes.map((type, index) => (
                    <MenuItem key={index} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Select Motor Type"
                value={selectedMotorType}
                onChange={(e) => setSelectedMotorType(e.target.value)}
                sx={{ mb: 2 }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {motorTypes.map((type, index) => (
                    <MenuItem key={index} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </TextField>
            <Typography gutterBottom>Price Range in €</Typography>
            <div style={{ position: 'relative' }}>
                <Slider
                    value={selectedPrice}
                    onChange={handleSliderChange}
                    min={priceRange.min}
                    max={priceRange.max}
                    valueLabelDisplay="auto"
                    ThumbComponent={() => null}
                    sx={{ mb: 2 }}
                />
                <LocalShippingIcon
                    style={{
                        ...carThumbStyles,
                        position: 'absolute',
                        left: `${((selectedPrice - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`
                    }}
                />
            </div>
            <Typography>Selected Price: {selectedPrice}€</Typography>
            <SearchButton onClick={handleSearch} />
        </Box>
    );
}

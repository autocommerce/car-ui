import React from 'react';
import { Box, Typography, Link, Paper } from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

export default function FilterSection() {
    const handleLinkClick = (path) => {
        console.log("Redirection vers :", path);
    };

    return (
        <Box
            sx={{
                width: '20%',
                padding: '10px',
                marginTop: '10px',
                backgroundColor: '#f3f3f3',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <Paper elevation={1} sx={{ padding: '5px', marginBottom: '10px', backgroundColor: '#ffffff' }}>
                <Typography variant="h6" gutterBottom sx={{ backgroundColor: '#f57c00', color: '#ffffff', padding: '5px' }}>Select by brand</Typography>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/Volkswagen')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <TimeToLeaveIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> VolksWagen
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/toyota')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <TimeToLeaveIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> Toyota
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/chevrolet')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <TimeToLeaveIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> Chevrolet
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/bmw')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <TimeToLeaveIcon sx={{ verticalAlign: 'middle', marginRight: '5px',  fontSize: '20px' }} /> BMW
                        </Link>
                    </li>
                </ul>
            </Paper>
            <Paper elevation={1} sx={{ padding: '5px', marginBottom: '10px', backgroundColor: '#ffffff' }}>
                <Typography variant="h6" gutterBottom sx={{ backgroundColor: '#f57c00', color: '#ffffff', padding: '5px'}}>Select by price</Typography>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/price/0-5000')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <EuroIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> 500 - 2,000 €
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/price/1')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <EuroIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> 2,000 - 5,000 €
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/price/2')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <EuroIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> 5,000 - 8,000 €
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/price/3')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <EuroIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> 8,000 - 100,000 €
                        </Link>
                    </li>
                </ul>
            </Paper>
            <Paper elevation={1} sx={{ padding: '5px', marginBottom: '10px', backgroundColor: '#ffffff' }}>
                <Typography variant="h6" gutterBottom sx={{ backgroundColor: '#f57c00', color: '#ffffff', padding: '10px' }}>Select by category</Typography>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/category/suv')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <TimeToLeaveIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> SUV
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/category/sedan')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <TimeToLeaveIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> SEDAN
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => handleLinkClick('/cars/category/sportive')} sx={{ color: 'black', '&:hover': { color: 'orange' }, textDecoration: 'none' }}>
                            <TimeToLeaveIcon sx={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '20px' }} /> SPORTIVE
                        </Link>
                    </li>
                </ul>
            </Paper>
        </Box>
    );
}

'use client';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const images = [
    {
        label: 'mini van',
        imgPath: 'https://media.istockphoto.com/id/1404695000/photo/isolated-hippy-van.webp?b=1&s=170667a&w=0&k=20&c=g7vtPptFNX8Vn4LVwMuED2UJpN1svSDajXFGWa0u-iE=',
    },
    {
        label: 'Ferrari LaFerrari',
        imgPath: 'https://fyooyzbm.filerobot.com/v7/d4d3c7b3a4dc224d5783de75d49f2a97-ZyZk7kh7.webp?vh=a98cf5&ci_seal=a2eaeb39d1',
    },
    {
        label: 'Porsche 911',
        imgPath: 'https://assets-global.website-files.com/652f7b32bc6142bd85a373b0/653038f8a3d7bc4941a913bc__DSC9739.webp',
    },
    {
        label: 'Bentley Continental GT',
        imgPath: 'https://motortech.fr/storage/actualites/HXt1yNoUV6zAWtxLCKbWBhR4gH9VeXbQ5rEFOCcf.webp',
    },
];

export default function CarouselMenu() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <Box sx={{
            flexGrow: 1,
            marginLeft: '10px',
            backgroundColor: 'transparent',
            padding: '5px',
            borderRadius: '10px',
            boxShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
        }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ position: 'relative'}}>
                <Box
                    component="img"
                    sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                    }}
                    src={images[activeStep].imgPath}
                    alt={images[activeStep].label}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '60%',
                        transform: 'translate(-20%, -50%)',
                        color: 'black',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4">Luxury Cars</Typography>
                    <Typography variant="subtitle1">
                        Experience the best quality and service in car sales.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            </Box>
        </Box>
    );
}

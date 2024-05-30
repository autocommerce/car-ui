'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const carImages = [
    {
        src: 'https://i.redd.it/4k-wallpaper-sports-cars-on-track-v0-9ujw5dx929sa1.jpg?width=3840&format=pjpg&auto=webp&s=6da227a49a303421979ac42f8f9b23d04a44997a',
        alt: 'Car 1',
        title: 'Pure Power',
        description: 'Discover our range of sports cars designed to deliver unrivalled performance. Experience adrenalin on every journey'
    },
    {
        src: 'https://medias.fcacanada.ca//specs/dodge/media/images/bento/dodge-charger-reveal-bento-last_6370ac8951e4dfe481da413952dbfb9d-2496x1248.jpg',
        alt: 'Car 2',
        title: 'Luxury and elegance',
        description: 'Drive in style and comfort with our luxury cars. A refined driving experience and sophisticated design for the most discerning drivers.'
    },
    {
        src: 'https://dfu7z1nf7ktq9.cloudfront.net/blog/20285/65f431858f4ce.webp',
        title: 'Classic Timelessness',
        description: 'Immerse yourself in automotive history with our classic cars. Vintage charm and robust mechanics for lovers of tradition'
    }
];

const CarouselContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    marginLeft: '20px',
    borderRadius: '10px'
});

const ImageWrapper = styled(Box)({
    width: '100%',
    height: '100%',
    position: 'relative',
});
const CarouselImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'transform 1.0s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)'
    }
});

const CarouselText = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontFamily: 'arial',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '10px 20px',
    borderRadius: '10px',
});

const NavigationButton = styled(Button)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
});

export default function Carrousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev === carImages.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrent(prev => (prev === carImages.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrent(prev => (prev === 0 ? carImages.length - 1 : prev - 1));
    };

    return (
        <CarouselContainer>
            {carImages.map((car, index) => (
                <ImageWrapper
                    key={index}
                    sx={{
                        display: index === current ? 'block' : 'none'
                    }}
                >
                    <CarouselImage src={car.src} alt={car.alt} />
                    <CarouselText>
                        <Typography variant="h4">{car.title}</Typography>
                        <Typography variant="body1">{car.description}</Typography>
                    </CarouselText>
                </ImageWrapper>
            ))}
            <NavigationButton
                onClick={handlePrev}
                sx={{ left: '10px' }}
            >
                {'<'}
            </NavigationButton>
            <NavigationButton
                onClick={handleNext}
                sx={{ right: '10px' }}
            >
                {'>'}
            </NavigationButton>
        </CarouselContainer>
    );
}

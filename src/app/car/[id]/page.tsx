'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import HeadMenu from '@/components/HeadMenu';
import Footer from '@/components/Footer';

type Car = {
    id: string;
    imageId: string;
    brand: string;
    model: string;
    description: string;
    price: string;
};

type Image = {
    id: string;
    Url: string;
};

const DescriptionPage: React.FC = () => {
    const { id } = useParams();
    const [carDetails, setCarDetails] = useState<Car | null>(null);
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCarData = async () => {
            if (!id) {
                setError('No car ID specified');
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(
                    `http://localhost:4000/cars/${id}`
                );
                if (!response.ok) throw new Error('Failed to fetch car data');
                const data: Car = await response.json();
                setCarDetails(data);
            } catch (error) {
                setError('Error fetching car data');
                console.error('Error fetching car data:', error);
            }
        };

        const fetchImagesData = async () => {
            try {
                const response = await fetch('http://localhost:4000/images');
                if (!response.ok) throw new Error('Failed to fetch images');
                const data: Image[] = await response.json();
                setImages(data);
            } catch (error) {
                setError('Error fetching images');
                console.error('Error fetching images:', error);
            }
        };

        fetchCarData();
        fetchImagesData();
        setLoading(false);
    }, [id]);

    const getImageUrl = (imageId: string) => {
        const image = images.find((img) => img.id === imageId);
        return image ? image.Url : '';
    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    if (!carDetails) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <Typography>No car details found.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: 'whitesmoke' }}>
            <HeadMenu />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    m: '5%'
                }}
            >
                <Box
                    component="img"
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        maxHeight: '400px',
                        objectFit: 'cover',
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                    src={getImageUrl(carDetails.imageId)}
                    alt={`${carDetails.brand} ${carDetails.model}`}
                />
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" component="h2">
                        {carDetails.brand} {carDetails.model}
                    </Typography>
                    <hr />
                    <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                        {carDetails.price}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        {carDetails.description}
                    </Typography>
                    <hr />
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            About this Car
                        </Typography>
                        <Typography variant="body1">
                            Here you can add more detailed information about the
                            car. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nullam scelerisque leo et nisi
                            pretium, non ultrices nulla efficitur. Cras ac eros
                            quis justo condimentum dapibus. Integer ut purus sit
                            amet velit tempor fermentum.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Contact Dealer
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default DescriptionPage;

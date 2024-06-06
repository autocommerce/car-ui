'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardCar from '../CardCar';

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
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }

    if (!carDetails) {
        return null;
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Car Description
                </Typography>
                <CardCar
                    id={carDetails.id}
                    image={getImageUrl(carDetails.imageId)}
                    brand={carDetails.brand}
                    model={carDetails.model}
                    description={carDetails.description}
                    price={carDetails.price}
                />
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        About this Car
                    </Typography>
                    <Typography variant="body1">
                        Here you can add more detailed information about the
                        car. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nullam scelerisque leo et nisi pretium, non
                        ultrices nulla efficitur. Cras ac eros quis justo
                        condimentum dapibus. Integer ut purus sit amet velit
                        tempor fermentum.
                    </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Button variant="contained" color="primary" size="large">
                        Contact Dealer
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default DescriptionPage;

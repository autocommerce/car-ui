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
    image: string;
    title: string;
    description: string;
    price: string;
};

const DescriptionPage: React.FC = () => {
    const { id } = useParams();
    
    console.log('Car ID:', id); // Log the car ID

    const [carDetails, setCarDetails] = useState<Car | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                setError('No car ID specified');
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(`http://localhost:4000/cars/${id}`);
                if (!response.ok) throw new Error('Failed to fetch data');
                const data: Car = await response.json();
                console.log('Fetched Data:', data); // Log the fetched data
                setCarDetails(data);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return null; // Retire les messages de chargement
    }

    if (error) {
        console.error(error);
        return null; // Retire les messages d'erreur
    }

    if (!carDetails) {
        return null; // Retire les messages "Car details not found"
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Car Description
                </Typography>
                <CardCar 
                    id={carDetails.id}
                    image={carDetails.image}
                    title={carDetails.title}
                    description={carDetails.description}
                    price={carDetails.price}
                />
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        About this Car
                    </Typography>
                    <Typography variant="body1">
                        Here you can add more detailed information about the car. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo et nisi pretium, non ultrices nulla efficitur. Cras ac eros quis justo condimentum dapibus. Integer ut purus sit amet velit tempor fermentum.
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

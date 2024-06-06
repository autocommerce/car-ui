import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import Link from 'next/link';

type CardCarProps = {
    id: string;
    image: string;
    brand: string;
    model: string;
    description: string;
    price: string;
};

const CardCar: React.FC<CardCarProps> = ({ id, image, brand, model, description, price }) => {
    return (
        <Box sx={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.3s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                    },
                    textDecoration: 'none'
                }}
            >
                <Link href={`/car/${id}`} passHref>
                    <CardMedia
                        component="img"
                        alt={`${brand} ${model}`}
                        height="240"
                        image={image}
                        sx={{
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    />
                </Link>
                <CardContent sx={{ textDecoration: 'none' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'none' }}>
                        {`${brand} ${model}`}
                    </Typography>
                    <Typography variant="body2" color="text.primary" sx={{ textDecoration: 'none' }}>
                        {description.substring(0, 60) + '...'}
                    </Typography>
                    <Typography variant="h5" sx={{ textDecoration: 'none' }}>
                        {price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: '5%', textDecoration: 'none' }}>
                    <Button size="small" variant="contained" sx={{ textDecoration: 'none' }}>
                        Buy
                    </Button>
                    <Button size="small" variant="contained" color="warning" sx={{ textDecoration: 'none' }}>
                        More info
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default CardCar;

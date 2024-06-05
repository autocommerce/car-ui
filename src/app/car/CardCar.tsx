// CardCar.tsx
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Link from 'next/link';

type CardCarProps = {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
};

const CardCar: React.FC<CardCarProps> = ({ id, image, title, description, price }) => {
    return (
        <div style={{ textDecoration: 'none' }}>
            <Link href={`/car/${id}`} passHref>
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
                    }}
                >
                    <CardMedia
                        component="img"
                        alt={title}
                        height="240"
                        image={image}
                        sx={{
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'none !important' }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.primary" sx={{ textDecoration: 'none' }}>
                            {description.substring(0, 60) + '...'}
                        </Typography>
                        <Typography variant="h5" sx={{ textDecoration: 'none' }}>{price}</Typography>
                    </CardContent>
                    <CardActions sx={{ ml: '5%' }}>
                        <Button size="small" variant="contained" color="success" sx={{ textDecoration: 'none' }}>
                            Buy
                        </Button>
                        <Button size="small" variant="contained" color="warning" sx={{ textDecoration: 'none' }}>
                            More info
                        </Button>
                    </CardActions>
                </Card>
            </Link>
        </div>
    );
};

export default CardCar;

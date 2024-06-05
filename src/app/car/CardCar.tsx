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
        <Link href={`/car/${id}`} passHref>
            <Card
                sx={{
                    maxWidth: 345,
                    '&:hover': {
                        boxShadow: '0 0 15px 0 gray',
                    },
                    transition: 'box-shadow 0.3s ease-in-out',
                    cursor: 'pointer',
                }}
            >
                <CardMedia
                    component="img"
                    alt={title}
                    height="240"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.substring(0, 60) + '...'}
                    </Typography>
                    <Typography variant="h5">{price}</Typography>
                </CardContent>
                <CardActions sx={{ ml: '5%' }}>
                    <Button size="small" variant="outlined">
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
};

export default CardCar;

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardCar() {
    return (
        <Card 
            sx={{
                maxWidth: 345,
                '&:hover': {
                    boxShadow: '0 0 15px 0 gray',
                },
                transition: 'box-shadow 0.3s ease-in-out',
            }}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="/porche.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Porche
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    We care about the durability of our products and we are sure
                    that it is perfect. As you understan...
                </Typography>
                <Typography variant="h5">$60.00</Typography>
            </CardContent>
            <CardActions sx={{ ml: '5%' }}>
                <Button size="small" variant="outlined">
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
}

'use client';
import React, { useState, useEffect } from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';
import CarouselMenu from '@/components/CarouselMenu';
import StartupPage from '@/components/StartupPage';
import CardCar from '@/app/car/CardCar';
import AppointmentPage from '@/components/AppointmentContactForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(126, 126, 129, 0.842)'
        }
    }
});

const HomePage: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [cars, setCars] = useState<Car[]>([]);
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [carsResponse, imagesResponse] = await Promise.all([
                    fetch('http://localhost:4000/cars'),
                    fetch('http://localhost:4000/images')
                ]);

                const carsData: Car[] = await carsResponse.json();
                const imagesData: Image[] = await imagesResponse.json();

                setCars(carsData);
                setImages(imagesData);
                setShowSplash(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getImageUrl = (imageId: string) => {
        const image = images.find((img) => img.id === imageId);
        return image ? image.Url : '';
    };

    if (showSplash) {
        return <StartupPage />;
    }

    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: 'whitesmoke' }}>
                <HeadMenu />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        gap: '20px'
                    }}
                >
                    <FilterSection />
                    <CarouselMenu />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '20px',
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}
                    >
                        {cars.slice(0, 3).map((car) => (
                            <CardCar
                                key={car.id}
                                id={car.id}
                                image={getImageUrl(car.imageId)}
                                brand={car.brand}
                                model={car.model}
                                description={car.description}
                                price={car.price}
                            />
                        ))}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '20px',
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}
                    >
                        {cars.slice(3, 6).map((car) => (
                            <CardCar
                                key={car.id}
                                id={car.id}
                                image={getImageUrl(car.imageId)}
                                brand={car.brand}
                                model={car.model}
                                description={car.description}
                                price={car.price}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <AppointmentPage />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default HomePage;

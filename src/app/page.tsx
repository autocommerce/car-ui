'use client';
import React, { useState, useEffect } from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';
import CarouselMenu from '@/components/CarouselMenu';
import StartupPage from '../components/StartupPage';
import CardCar from '@/app/car/CardCar';
import AppointmentPage from '@/components/AppointmentContactForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '@/components/Footer';

type Car = {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
};

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(126, 126, 129, 0.842)',
        },
    },
});

const HomePage: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/cars');
                const data: Car[] = await response.json();
                setCars(data);
                setShowSplash(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (showSplash) {
        return <StartupPage />;
    }

    return (
        <ThemeProvider theme={theme} >
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
                <div
                    style={{
                        display: 'flex',
                        marginTop: '20px',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    {cars.map((car, index) => (
                        <CardCar
                            key={index}
                            id={car.id}
                            image={car.image}
                            title={car.title}
                            description={car.description}
                            price={car.price}
                        />
                    ))}
                </div>
                <div>
                <AppointmentPage />
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    );
};

export default HomePage;

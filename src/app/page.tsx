'use client';
import React, { useState, useEffect } from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';
import CarouselMenu from '@/components/CarouselMenu';
import ContactSection from '@/components/Contact';
import StartupPage from '../components/StartupPage';
import CardCar from '@/app/car/CardCar';

type Car = {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
};

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
        <div style={{ backgroundColor: 'whitesmoke' }}>
            <HeadMenu />
            <div
                style={{
                    display: 'flex',
                    marginTop: '20px',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <FilterSection />
                <CarouselMenu />
                <ContactSection />
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
                        key={index + cars.length} 
                        id={car.id}
                        image={car.image} 
                        title={car.title} 
                        description={car.description} 
                        price={car.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;

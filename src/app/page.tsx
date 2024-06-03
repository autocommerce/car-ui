'use client';
import React, { useState, useEffect } from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';
import CarouselMenu from '@/components/CarouselMenu';
import StartupPage from '../components/StartupPage';
import AppointmentContactForm from '@/components/AppointmentContactForm';

const HomePage: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return <StartupPage />;
    }

    return (
        <div>
            <HeadMenu />
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <FilterSection />
                <CarouselMenu />
            </div>
            <AppointmentContactForm />
        </div>
    );
};

export default HomePage;

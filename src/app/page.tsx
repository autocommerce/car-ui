'use client';
import React, { useState, useEffect } from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';
import CarouselMenu from '@/components/CarouselMenu';
import ContactSection from '@/components/Contact';
import StartupPage from '../components/StartupPage';

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
        </div>
    );
};

export default HomePage;
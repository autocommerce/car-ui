import React from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';
import CarouselMenu from '@/components/CarouselMenu';


const HomePage: React.FC = () => {
    return (
        <div>
            <HeadMenu />
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <FilterSection />
                <CarouselMenu />
            </div>
        </div>
    );
};

export default HomePage;

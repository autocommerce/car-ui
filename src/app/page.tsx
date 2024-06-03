import React from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';
import CarouselMenu from '@/components/CarouselMenu';
import ContactSection from '@/components/Contact';


const HomePage: React.FC = () => {
    return (
        <div>
            <HeadMenu />
            <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'row',justifyContent:'space-between' }}>
                <FilterSection />
                <CarouselMenu />
                <ContactSection />
            </div>
        </div>
    );
};

export default HomePage;

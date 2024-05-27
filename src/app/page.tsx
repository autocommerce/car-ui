import React from 'react';
import HeadMenu from '@/components/HeadMenu';
import FilterSection from '@/components/FilterSection';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeadMenu />
            <div style={{ marginTop: '20px' }}>
                <FilterSection />
            </div>
        </div>
    );
};

export default HomePage;

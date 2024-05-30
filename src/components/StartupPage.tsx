import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import golfImage from '@/assets/images/golf.png';

const StartupPage = () => {
    return (
        <Container sx={{width:'100%'}}>
            <Box sx={{ display: 'flex', flexDirection:'row'}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to Cars
                    </Typography>
                    <Typography variant="h6" component="p">
                        Find your dream car in Cars
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box
                    sx={{
                        width: '90%', 
                        height: '90vh',
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
                        borderRadius: '90%', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#000',
                        marginBottom: '-60%'
                    }}
                    >
                    </Box>
                    <Image
                        src={golfImage}
                        alt="Golf Car"
                        width={650}
                        height={500}                
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default StartupPage;

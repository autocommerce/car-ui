'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { keyframes } from '@emotion/react';
import golfImage from '@/assets/images/golf.png';

const pulse = keyframes`
  0%, 100% {
    width: 90%;
  }
  50% {
    width: 95%;
  }
`;

const StartupPage = () => {
    return (
        <Container sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: '65px' }}>
                        Welcome to Vaika
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{ ml: '-24%', mt: '5%' }}
                    >
                        Find your dream car in Vaika
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: '-10%'
                    }}
                >
                    <Box
                        sx={{
                            width: '90%',
                            height: '90vh',
                            background:
                                'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            borderRadius: '90%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#000',
                            marginBottom: '-60%',
                            animation: `${pulse} 2s infinite`
                        }}
                    ></Box>
                    <Image
                        src={golfImage}
                        alt="Golf Car"
                        width={660}
                        height={500}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default StartupPage;

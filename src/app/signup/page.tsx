'use client';
import React, { useState } from 'react';
import { useNotify } from 'react-admin';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/navigation';
import authProvider from '@/providers/authProvider';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(126, 126, 129, 0.842)'
        }
    }
});

const CustomSignUpPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const notify = useNotify();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await authProvider.signup({ username, email, password });
            notify('Inscription réussie !', { type: 'success' });
            router.push('/dashboard');
        } catch (error) {
            const err = error as Error;
            notify(`Erreur lors de l'inscription : ${err.message}`, {
                type: 'warning'
            });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                    <Button variant="contained" sx={{ width: '50%' }}>
                        <Link
                            href="/dashboard#/login"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            login
                        </Link>
                    </Button>
                </Box>
            </Container>
            <Box
                sx={{
                    ml: 2,
                    backgroundColor: 'rgba(126, 126, 129, 0.842)',
                    borderRadius: '80%',
                    height: '45px',
                    width: '45px',
                    display: 'flex',
                    position: 'fixed',
                    right: '30px',
                    bottom: '10%',
                    paddingLeft: '15px',
                    paddingTop: '10px'
                }}
            >
                <Link
                    href="/"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                >
                    <ArrowBackIosIcon />
                </Link>
            </Box>
        </ThemeProvider>
    );
};

export default CustomSignUpPage;

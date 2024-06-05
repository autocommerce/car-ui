'use client';
import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch'
            }
        }
    }
}));
const NavBar = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '80px'
});
const NavBarLink = styled('a')(({ theme }) => ({
    color: theme.palette.common.black,
    textDecoration: 'none',
    margin: theme.spacing(0, 4),
    '&:hover': {
        color: theme.palette.warning.main
    }
}));

export default function HeadMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <Box>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'rgba(45, 45, 46, 0.842)',
                    color: 'whitesmoke'
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        sx={{ mr: 2, color: 'black' }}
                        onClick={toggleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    {isMenuOpen ? (
                        <NavBar>
                            <NavBarLink href="#">Home</NavBarLink>
                            <NavBarLink href="#">Brand</NavBarLink>
                            <NavBarLink href="#">Contact</NavBarLink>
                        </NavBar>
                    ) : null}
                    <Typography
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                            fontFamily: '',
                            color: '#333',
                            marginLeft: isMenuOpen ? '10%' : '0',
                            transition: 'margin-left 0.5s',
                            '& span': {
                                marginLeft: '20px',
                                marginRight: '20px',
                                fontSize: '30px',
                                padding: '5px',
                                fontFamily: 'Courier New, monospace',
                                color: 'white'
                            },
                            '& .icon': {
                                verticalAlign: 'middle',
                                fontSize: '60px',
                                marginLeft: '2px',
                                marginRight: '2px',
                                color: 'black'
                            }
                        }}
                    >
                        <span>Vaika</span>
                        <LocalShippingOutlinedIcon className="icon" />
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search car…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button variant="contained" sx={{ ml: 2 }}>
                        <Link
                            href="/signup"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            sign up
                        </Link>
                    </Button>
                    <Button variant="contained" sx={{ ml: 2 }}>
                        <Link
                            href="/dashboard"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            Login
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
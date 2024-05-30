'use client';
import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="black"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
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
                            marginLeft: isMenuOpen ? '300px' : '0',
                            transition: 'margin-left 0.3s',
                            '& span': {
                                marginLeft: '20px',
                                marginRight: '20px',
                                fontSize: '30px',
                                padding: '5px',
                                fontFamily: 'Courier New, monospace',
                                color: 'orange'
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
                        <span>Car</span>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Amidy</span>
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
                </Toolbar>
            </AppBar>
        </Box>
    );
}
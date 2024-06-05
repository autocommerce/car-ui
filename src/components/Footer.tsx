import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Google } from '@mui/icons-material';

function Footer() {
  return (
    <Box 
      component="footer" 
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '2rem 0'
      }}
    >
      <Container 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}
      >
        <Box 
          style={{
            flex: 1,
            margin: '0.5rem'
          }}
        >
          <Typography variant="h6">INFORMATION</Typography>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Home</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Search</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Blog</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>About Us</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Documentation</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Contact us</Link>
        </Box>
        <Box 
          style={{
            flex: 1,
            margin: '0.5rem'
          }}
        >
          <Typography variant="h6">PRODUCTS</Typography>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Wheels</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Accessories</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Sport Tyres</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Winter Tyres</Link>
          <Link href="#" style={{ color: '#fff', margin: '0.5rem 0', display: 'block', textDecoration: 'none' }}>Summer Tyres</Link>
        </Box>
        <Box 
          style={{
            flex: 1,
            margin: '0.5rem'
          }}
        >
          <Typography variant="h6">FOLLOW US</Typography>
          <Box 
            style={{
              display: 'flex',
              justifyContent: 'flex-start'
            }}
          >
            <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '0.5rem' }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '0.5rem' }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://plus.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '0.5rem' }}>
              <Google />
            </IconButton>
          </Box>
        </Box>
        <Box 
          style={{
            flex: 1,
            margin: '0.5rem'
          }}
        >
          <Typography variant="h6">CONTACTS</Typography>
          <Typography>1-800-234-5677</Typography>
          <Typography>1-800-234-5678</Typography>
        </Box>
      </Container>
      <Container>
        <Typography 
          align="center" 
          variant="body2" 
          style={{ marginTop: '1rem' }}
        >
          © {new Date().getFullYear()} Voiture. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

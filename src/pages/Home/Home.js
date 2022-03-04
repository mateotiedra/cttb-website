import React, { useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import { Box } from '@mui/system';
import imgCarousel1 from '../../assets/images/home-carousel-1.jpeg';
import { Typography } from '@mui/material';

function Home() {
  const imgSrc = useRef(
    require(`../../assets/images/home-carousel-1.jpeg`).default
  );
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: '65vh',
          backgroundImage: `url(${imgCarousel1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 10,
            height: '100%',
            width: '100%',
            backgroundColor: 'background.default',
            opacity: 0.7,
          }}
        />
        <Typography
          variant='h1'
          sx={{
            zIndex: 15,
            ml: '10%',
            mr: '25%',
            maxWidth: '1000px',
          }}
        >
          Club de Tennis de Table Bernex
        </Typography>
      </Box>
    </>
  );
}

export default Home;

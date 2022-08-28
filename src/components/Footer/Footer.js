import React from 'react';
import { Box, Paper, Container, Typography } from '@mui/material';

import FooterLogic from './FooterLogic';

function SponsorsSection() {
  const { sponsors } = FooterLogic();
  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {sponsors.map(({ name, href }) => (
        <Box
          component='a'
          href={href}
          key={name}
          sx={{
            backgroundColor: 'white',
            overflow: 'hidden',
            px: 2,
            py: 1,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 80,
              backgroundImage: `url(sponsors/${name})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        </Box>
      ))}
    </Container>
  );
}

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 8,
        px: 2,
        mt: 'auto',
      }}
    >
      <SponsorsSection />
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='body2' color='text.secondary' mt={3}>
          {'Copyright © CTT Bernex '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

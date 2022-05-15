import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container
        maxWidth='sm'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography variant='body2' color='text.secondary'>
          {'Copyright © CTT Bernex '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';

function HeadTitle({ image, title, noFilter, height, children }) {
  noFilter = noFilter || image === undefined;
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: height || '65vh',
          backgroundImage: image && `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'primary.main',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!noFilter && (
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
        )}
        <SectionContainer sx={{ zIndex: 15 }}>
          <Typography
            variant='h1'
            color={noFilter && 'background.default'}
            sx={{ overflowWrap: 'anywhere' }}
          >
            {title || children}
          </Typography>
        </SectionContainer>
      </Box>
    </>
  );
}

export default HeadTitle;

import React from 'react';

import { Button, Typography } from '@mui/material';

function PageButton({ text, onClick }) {
  return (
    <Button
      variant='contained'
      size='large'
      sx={{
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
      }}
      onClick={onClick}
    >
      <Typography variant='button'>{text}</Typography>
    </Button>
  );
}

export default PageButton;

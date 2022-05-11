import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Divider, Link, Paper, Typography } from '@mui/material';

function PreviewCard({ children, title, description, to }) {
  return (
    <Paper
      backgroundColor='primary.default'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 4,
        flexGrow: 1,
        bg: 'primary.default',
      }}
    >
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='h6'>{description}</Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      {children}

      {to && (
        <Link
          component={RouterLink}
          to={to}
          sx={{ mt: 'auto', alignSelf: 'flex-end' }}
        >
          Voir plus...
        </Link>
      )}
    </Paper>
  );
}

export default PreviewCard;

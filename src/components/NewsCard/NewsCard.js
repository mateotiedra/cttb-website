import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Paper, Typography, Link, Box } from '@mui/material';

import defaultImage from '../../assets/images/news-card-default-image.jpg';

function NewsCard({ title, id, image, createdAt, children }) {
  const formatedDate =
    createdAt &&
    `${createdAt.split('-')[2].substring(0, 2)}.${createdAt.split('-')[1]}.${
      createdAt.split('-')[0]
    }`;
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 355,
        width: 355,
        overflow: 'hidden',
        /* '&:hover': {
          cursor: 'pointer',
        }, */
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '60%',
          backgroundImage: `url(${image || defaultImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: 3,
          maxHeight: '42%',
        }}
      >
        <Box
          sx={{
            maxWidth: '100%',
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <Typography variant='h5'>{title}</Typography>
          {/* <Typography variant='body2'>{children}</Typography> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 'auto',
            alignItems: 'baseline',
          }}
        >
          <Typography variant='body2' color='text.secondary'>
            {formatedDate}
          </Typography>
          <Link component={RouterLink} to={'/actualite/' + id}>
            Voir plus...
          </Link>
        </Box>
      </Box>
    </Paper>
  );
}

export default NewsCard;

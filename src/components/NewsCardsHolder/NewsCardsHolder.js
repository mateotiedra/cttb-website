import React from 'react';

import { Box } from '@mui/material';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardsHolder({ newsList, oneLine }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        flexWrap: oneLine ? 'noWrap' : 'wrap',
        overflow: 'hidden',
        justifyContent: 'center',
      }}
    >
      {newsList.map((news) => {
        return (
          <NewsCard {...news} key={news.id}>
            {news.description}
          </NewsCard>
        );
      })}
    </Box>
  );
}

export default NewsCardsHolder;

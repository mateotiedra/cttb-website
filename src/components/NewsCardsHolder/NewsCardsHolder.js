import React from 'react';

import { Box } from '@mui/material';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardsHolder({ newsList, oneLine }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: !oneLine && 4,
        rowGap: 4,
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: oneLine ? 'space-between' : 'center',
        width: '100%',
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

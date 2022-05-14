import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import HeadTitle from '../../components/HeadTitle/HeadTitle';
import Loading from '../Loading/Loading';

import defaultImage from '../../assets/images/news-default-image.jpg';

import NewsLogic from './NewsLogic';

function News() {
  const { pageStatus, mod, newsData } = NewsLogic();
  console.log(newsData);

  if (pageStatus === 'loading') return <Loading />;
  return (
    <>
      <Navbar />
      <HeadTitle
        image={newsData.image || defaultImage}
        noFilter={newsData.image !== undefined}
        height='50vh'
      />
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 1 }}>
          {newsData.title}
        </Typography>
        <Typography variant='body1'>{newsData.description}</Typography>
      </SectionContainer>
      <SectionDivider h={0.5} />
      {newsData.links && newsData.links.length && (
        <SectionContainer>
          <Typography variant='h4'>Liens</Typography>
        </SectionContainer>
      )}
    </>
  );
}

export default News;

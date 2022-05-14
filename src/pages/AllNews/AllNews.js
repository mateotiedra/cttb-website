import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import PreviewCard from '../../components/PreviewCard/PreviewCard';
import Loading from '../Loading/Loading';

import AllNewsLogic from './AllNewsLogic';
import NewsCardsHolder from '../../components/NewsCardsHolder/NewsCardsHolder';

function AllNews() {
  const { pageStatus, mod, newsList } = AllNewsLogic();
  console.log(newsList);

  if (pageStatus === 'loading') return <Loading />;
  return (
    <>
      <Navbar />
      <SectionDivider />
      <SectionContainer>
        <NewsCardsHolder newsList={newsList} />
      </SectionContainer>
    </>
  );
}

export default AllNews;

import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import HeadTitle from '../../components/HeadTitle/HeadTitle';
import Loading from '../Loading/Loading';
import NewsLogic from './NewsLogic';
import FormTextField from '../../components/FormTextField/FormTextField';
import PageButton from '../../components/PageButton/PageButton';

import defaultImage from '../../assets/images/news-default-image.jpg';
import EditNews from '../../components/EditNews/EditNews';

function LinksSection({ newsData }) {
  if (newsData.links && newsData.links.length) {
    return (
      <SectionContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h4' mt={4}>
          Liens
        </Typography>
        {newsData.links.map((link) => (
          <Link href={link.adress} my={1} key={link.title}>
            <Typography sx={{ overflowWrap: 'anywhere' }}>
              {link.title}
            </Typography>
          </Link>
        ))}
      </SectionContainer>
    );
  } else return <></>;
}

function News(props) {
  const { pageStatus, mod, newsData, handleEdit, setPageStatus } =
    NewsLogic(props);

  if (pageStatus === 'loading') return <Loading />;
  if (pageStatus === 'edit' || pageStatus === 'sending')
    return <EditNews newsData={newsData} setPageStatus={setPageStatus} />;

  const formatedDate =
    newsData &&
    newsData.createdAt &&
    `${newsData.createdAt.split('-')[2].substring(0, 2)}.${
      newsData.createdAt.split('-')[1]
    }.${newsData.createdAt.split('-')[0]}`;

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
        <Typography variant='h2' sx={{ overflowWrap: 'anywhere' }}>
          {newsData.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
          {formatedDate}
        </Typography>
        <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }}>
          {newsData.description}
        </Typography>
      </SectionContainer>
      <LinksSection newsData={newsData} />
      {mod && <PageButton text='Modifier' onClick={handleEdit} />}
      <Footer />
    </>
  );
}

export default News;

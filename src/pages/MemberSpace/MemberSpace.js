import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import Loading from '../Loading/Loading';

import MemberSpaceLogic from './MemberSpaceLogic';

function MemberSpace(props) {
  const { pageStatus, admin, userName } = MemberSpaceLogic();

  if (pageStatus === 'loading') return <Loading />;
  return (
    <>
      <Navbar admin={admin} />
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ textTransform: 'capitalize' }}>
          {`Salut ${userName} !`}
        </Typography>
      </SectionContainer>
      <Footer />
    </>
  );
}

export default MemberSpace;

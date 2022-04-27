import React from 'react';

import { Typography } from '@mui/material';

import SectionContainer from '../../components/SectionContainer/SectionContainer';

import MemberManagerLogic from './MemberManagerLogic';
import Navbar from '../../components/Navbar/Navbar';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import Footer from '../../components/Footer/Footer';

function MemberManager(props) {
  const {} = MemberManagerLogic();
  return (
    <>
      <Navbar admin />
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2'>Liste des membres</Typography>
      </SectionContainer>
      <Footer />
    </>
  );
}

export default MemberManager;

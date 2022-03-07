import React from 'react';
import { TextField, Typography } from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

import StageLogic from './StageLogic';

function Stage(props) {
  const { register, handleSubmit } = StageLogic();
  return (
    <>
      <Navbar />
      <SectionDivider h={2} />
      <SectionContainer sx={{ color: 'primary' }}>
        <Typography variant='h2'>Inscription aux stages</Typography>
        <form>
          <TextField label='Prénom' variant='filled' />
        </form>
      </SectionContainer>
    </>
  );
}

export default Stage;

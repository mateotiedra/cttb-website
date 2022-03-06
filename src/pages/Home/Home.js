import React, { useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import { Box } from '@mui/system';
import imgCarousel1 from '../../assets/images/home-carousel-1.jpeg';
import { Link, Typography } from '@mui/material';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import TrainingSchedule from '../../components/TrainingSchedule/TrainingSchedule';

function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: '65vh',
          backgroundImage: `url(${imgCarousel1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 10,
            height: '100%',
            width: '100%',
            backgroundColor: 'background.default',
            opacity: 0.7,
          }}
        />
        <SectionContainer sx={{ zIndex: 15 }}>
          <Typography variant='h1'>Club de Tennis de Table Bernex</Typography>
        </SectionContainer>
      </Box>
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Qui sommes nous ?
        </Typography>
        <Typography variant='body1' textAlign='justify'>
          Situé dans l'école Robert-Hainard, notre club compte près de 70
          membres pratiquants le tennis de table aussi bien en compétition
          officielle qu'en loisir. L'équipe de moniteurs diplômés de la
          Fédération Suisse de Tennis de Table (www.swisstabletennis.ch) et J+S
          (www.jeunesseetsport.ch) anime la structure d'entraînements accessible
          à tous les niveaux, du débutant total au joueur licencié, et à tous
          les âges, des jeunes de 8 ans aux vétérans.
        </Typography>
      </SectionContainer>
      <SectionDivider />

      <SectionContainer id='horaires'>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Horaires
        </Typography>
        <TrainingSchedule />
      </SectionContainer>
      <SectionDivider />

      <SectionContainer id='contact'>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Contact
        </Typography>
        <Typography>
          Une question ? Besoin d'informations supplémentaires ? Contactez-nous
          : <Link href='mailto:contact@cttbernex.ch'>contact@cttbernex.ch</Link>
        </Typography>
        <Typography>
          Adresse :{' '}
          <Link href='https://goo.gl/maps/FDHhVR1WtcTrLgn47'>
            Au sous-sol de l'école Robert-Hainard, Chemin de Saule 120, 1233
            Bernex
          </Link>
        </Typography>
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

export default Home;

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import { Box } from '@mui/system';
import imgCarousel1 from '../../assets/images/home-carousel-1.jpeg';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import TrainingSchedule from '../../components/TrainingSchedule/TrainingSchedule';
import Footer from '../../components/Footer/Footer';
import PreviewCard from '../../components/PreviewCard/PreviewCard';
import PageButton from '../../components/PageButton/PageButton';

import HomeLogic from './HomeLogic';

function TitleSection() {
  return (
    <>
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
        <SectionContainer sx={{ zIndex: 15, position: 'relative', top: -35 }}>
          <Typography variant='h1'>Club de Tennis de Table Bernex</Typography>
        </SectionContainer>
      </Box>
    </>
  );
}

function NewsSection() {
  return (
    <>
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          News
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 6,
          }}
        >
          <PreviewCard title='Actualité' to='/actualite' />
        </Box>
      </SectionContainer>
    </>
  );
}

function WhoSection() {
  return (
    <>
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Qui sommes nous ?
        </Typography>
        <Typography variant='body1' textAlign='justify'>
          Situé dans l'école Robert-Hainard, notre club compte près de 70
          membres pratiquants le tennis de table aussi bien en compétition
          officielle qu'en loisir. L'équipe de moniteurs diplômés de la
          Fédération Suisse de tennis de table (www.swisstabletennis.ch) et J+S
          (www.jeunesseetsport.ch) anime la structure d'entraînement accessible
          à tous les niveaux, du débutant total au joueur licencié, et à tous
          les âges, des jeunes de 8 ans aux vétérans.
        </Typography>
      </SectionContainer>
    </>
  );
}

function ScheduleSection() {
  return (
    <>
      <SectionDivider id='horaires' />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Horaires
        </Typography>
        <TrainingSchedule />
      </SectionContainer>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <SectionDivider id='contact' />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Contact
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Une question ? Besoin d'informations supplémentaires ?
          <br /> Générale :{' '}
          <Link href='mailto:contact@cttbernex.ch'>contact@cttbernex.ch</Link>
          <br /> Concernant les stages :{' '}
          <Link href='mailto:stage@cttbernex.ch'>stage@cttbernex.ch</Link>
        </Typography>
        <Typography>
          Adresse :{' '}
          <Link href='https://goo.gl/maps/FDHhVR1WtcTrLgn47'>
            Au sous-sol de l'école Robert-Hainard, Chemin de Saule 120, 1233
            Bernex
          </Link>
        </Typography>
      </SectionContainer>
    </>
  );
}

function LinksDialog({ opened, handleOpen, handleClose }) {
  const usefulLinks = [
    {
      title: 'Fédération suisse de tennis de table (STT)',
      href: 'https://swisstabletennis.ch/',
    },
    {
      title: 'Association Genevoise de Tennis de Table (AGTT)',
      href: 'https://www.agtt.ch/',
    },
    {
      title: 'Pyngpong.info (incription aux tournois)',
      href: 'https://pyngpong.info/',
    },
    {
      title: 'Click-tt (résultats des championnats et classements)',
      href: 'https://www.click-tt.ch/',
    },
    {
      title: 'Fédération Internationale de Tennis de Table (ITTF)',
      href: 'https://www.ittf.com/',
    },
  ];
  return (
    <>
      <PageButton onClick={handleOpen} text='Liens utiles' />
      <Dialog
        open={opened}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Liens utiles</DialogTitle>
        <List sx={{ pt: 0 }}>
          {usefulLinks.map((usefulLink) => (
            <ListItem
              button
              onClick={() => {
                window.open(usefulLink.href);
              }}
              key={usefulLink.title}
            >
              <Link
                sx={{
                  px: 2,
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                {usefulLink.title}
              </Link>
            </ListItem>
          ))}
        </List>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function Home() {
  const { linksDialogOpen, handleCloseLinksDialog, handleOpenLinksDialog } =
    HomeLogic();
  return (
    <>
      <Navbar />
      <TitleSection />
      {/* <NewsSection /> */}
      <WhoSection />
      <ScheduleSection />
      <ContactSection />
      <SectionDivider />
      <LinksDialog
        opened={linksDialogOpen}
        handleClose={handleCloseLinksDialog}
        handleOpen={handleOpenLinksDialog}
      />
      <Footer />
    </>
  );
}

export default Home;

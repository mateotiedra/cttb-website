import React from 'react';

import {
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { HashLink as RouterLink } from 'react-router-hash-link';

import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import DuesTables from '../../components/DuesTables/DuesTables';
import Footer from '../../components/Footer/Footer';

function ClubRegistration(props) {
  const FreeLessonsSection = (
    <SectionContainer>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Cours d'essais
      </Typography>
      <Typography variant='body1'>
        Vous avez la possibilité de venir à trois séances d'essaies
        gratuitement. Pour cela, vous pouvez venir sans prévenir nous rencontrer
        dans nos locaux lors des entraînements avec vos affaires !
      </Typography>
    </SectionContainer>
  );

  const DuesSection = (
    <SectionContainer>
      <Typography variant='h2'>Cotisations</Typography>
      <Typography variant='h5' sx={{ mb: 1 }}>
        Tarifs par saison
      </Typography>
      <DuesTables />
    </SectionContainer>
  );

  const PaymentsSection = (
    <SectionContainer>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Paiement
      </Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 4,
          flexGrow: 1,
        }}
      >
        <Typography variant='h4'>Virement bancaire</Typography>
        <Divider sx={{ pt: 1 }} />
        <List>
          <ListItem>
            <ListItemText
              primary={'IBAN'}
              secondary={'CH29 0078 8000 U325 2995 8'}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'Titulaire du compte'}
              secondary={'CTT Bernex tennis de table'}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'Commentaire'}
              secondary={
                'Raison du versement (Cotisation / licence, nom, prénom)'
              }
            />
          </ListItem>
        </List>
      </Paper>
    </SectionContainer>
  );

  return (
    <>
      <Navbar />
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 1 }}>
          Adhérer au club
        </Typography>
        <Typography variant='body1'>
          {'Pour devenir membre il suffit de remplir le '}
          <Link component={RouterLink} to='/adhesion/formulaire'>
            formulaire d'inscription en ligne
          </Link>
          {' et de payer la '}
          <Link component={RouterLink} to='/adhesion#dues'>
            cotisation
          </Link>
          {'.'}
        </Typography>
      </SectionContainer>
      <SectionDivider />
      {FreeLessonsSection}
      <SectionDivider id='dues' />
      {DuesSection}
      <SectionDivider />
      {PaymentsSection}
      <SectionDivider />
      <Button
        variant='contained'
        disableElevation
        size='large'
        sx={{
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
        }}
        component={RouterLink}
        to='/adhesion/formulaire'
      >
        Devenir membre
      </Button>
      <Footer />
    </>
  );
}

export default ClubRegistration;

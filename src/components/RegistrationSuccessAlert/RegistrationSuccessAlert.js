import React from 'react';
import { Alert, AlertTitle, Link, Typography } from '@mui/material';
import { HashLink as RouterLink } from 'react-router-hash-link';

import SectionContainer from '../SectionContainer/SectionContainer';

function RegistrationSuccessAlert({ confirmationEmail }) {
  return (
    <SectionContainer sx={{ mt: 6 }}>
      <Alert severity='success' sx={{ p: 2 }}>
        <AlertTitle>Inscription enregistrée !</AlertTitle>
        <Typography variant='inherit'>
          {
            "Votre inscription a bien été enregistré ! D'ici quelques minutes, un email de confirmation vous sera envoyé à l'adresse suivante : "
          }
          <Typography
            variant='inherit'
            sx={{ color: 'primary.main' }}
            component={'span'}
          >
            {confirmationEmail}
          </Typography>
          {". N'hésitez pas à "}
          <Link component={RouterLink} to={'/#contact'} sx={{ width: 'auto' }}>
            nous contacter
          </Link>
          {' en cas de questions.'}
        </Typography>
      </Alert>
    </SectionContainer>
  );
}

export default RegistrationSuccessAlert;

import React from 'react';
import { Alert, AlertTitle, Link, Typography } from '@mui/material';
import { HashLink as RouterLink } from 'react-router-hash-link';

import SectionContainer from '../SectionContainer/SectionContainer';

function RegistrationClosedAlert({ eventName }) {
  return (
    <SectionContainer sx={{ mt: 6 }}>
      <Alert severity='error' sx={{ p: 2 }}>
        <AlertTitle>Inscriptions actuellement fermées</AlertTitle>
        <Typography variant='inherit'>
          {`Les inscriptions pour ${eventName} ne sont pas ou plus ouvertes pour le moment. N'hésitez pas à `}
          <Link component={RouterLink} to={'/#contact'} sx={{ width: 'auto' }}>
            nous contacter
          </Link>
          {' en cas de questions.'}
        </Typography>
      </Alert>
    </SectionContainer>
  );
}

export default RegistrationClosedAlert;

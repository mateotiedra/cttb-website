import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginLogic from './LoginLogic';
import FormTextField from '../../components/FormTextField/FormTextField';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        CTT Bernex
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const { register, errors, onSubmit, pageStatus } = LoginLogic();

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1 }}></Avatar>
        <Typography component='h1' variant='h5'>
          Connexion
        </Typography>
        <Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <FormTextField
            required
            id='email'
            label='Adresse email'
            autoComplete='email'
            autoFocus
            errors={errors}
            registration={register('email', {
              required: true,
              pattern: /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          <FormTextField
            required
            id='password'
            label='Mot de passe'
            autoComplete='current-password'
            errors={errors}
            registration={register('password', {
              required: true,
            })}
          />
          <LoadingButton
            variant='contained'
            type='submit'
            disableElevation
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            loading={pageStatus === 'sending'}
          >
            Se connecter
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Mot de passe oublié ?
              </Link>
            </Grid>
            {/* <Grid item>
              <Link href='#' variant='body2'>
                {"Pas encore de compte ?"}
              </Link>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

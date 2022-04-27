import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SignInLogic from './SignInLogic';

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

export default function SignIn() {
  const { register, errors, onSubmit, pageStatus } = SignInLogic();

  return (
    <Container component='main' maxWidth='xs'>
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
          Sign in
        </Typography>
        <Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Adresse email'
            name='email'
            autoComplete='email'
            autoFocus
            variant='filled'
            error={errors['email'] !== undefined}
            {...register('email', {
              required: true,
              pattern: /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Mot de passe'
            type='password'
            id='password'
            autoComplete='current-password'
            variant='filled'
            error={errors['password'] !== undefined}
            {...register('password', {
              required: true,
              pattern: /[\s\S]*/,
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

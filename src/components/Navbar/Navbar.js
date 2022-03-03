import React from 'react';
import { css } from '@emotion/react';

import NavbarLogic from './NavbarLogic';

import ClubLogo from '../../assets/svgs/logo.png';
import { AppBar, Link, Typography } from '@mui/material';

function Navbar(props) {
  const { navLinksObj } = NavbarLogic();
  return (
    <AppBar
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        px: 2,
      }}
    >
      <Link
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '70px',
          ml: 2,
        }}
        href='/'
      >
        <img src={ClubLogo} alt='Logo' />
        <Typography
          variant='h4'
          sx={{
            textTransform: 'uppercase',
            fontWeight: 600,
            ml: 2,
          }}
        >
          CTT Bernex
        </Typography>
      </Link>
      <div sx={{ mx: 'auto' }} />
      {navLinksObj.map((linkObj) => {
        return (
          <Link
            key={linkObj.text}
            href={linkObj.to}
            sx={{
              variant: 'styles.navLink',
              ml: 5,
              py: 2,
              fontSize: 3,
              display: ['none', 'none', 'inline'],
            }}
          >
            {linkObj.text}
          </Link>
        );
      })}
    </AppBar>
  );
}

export default Navbar;

/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';

import NavbarLogic from './NavbarLogic';
import { Heading, jsx, Link } from 'theme-ui';

import ClubLogo from '../../assets/svgs/logo.png';

function Navbar(props) {
  const { navLinksObj } = NavbarLogic();
  return (
    <header sx={{ bg: 'background', py: 1 }}>
      <div
        sx={{
          px: 6,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '70px',
          }}
          href='/'
        >
          <img src={ClubLogo} alt='Logo' />
          <Heading
            sx={{
              textTransform: 'uppercase',
              color: 'primary',
              fontSize: 6,
              ml: 2,
            }}
          >
            CTT Bernex
          </Heading>
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
      </div>
    </header>
  );
}

export default Navbar;

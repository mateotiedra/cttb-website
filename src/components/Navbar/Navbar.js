import React from 'react';
import { css } from '@emotion/react';

import NavbarLogic from './NavbarLogic';

import ClubLogo from '../../assets/images/logo.png';
import {
  AppBar,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box } from '@mui/system';

function Navbar(props) {
  const { navLinksObj, drawerOpened, toggleDrawer } = NavbarLogic();

  const drawer = (
    <SwipeableDrawer
      anchor={'left'}
      open={drawerOpened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{
          width: 250,
          height: '100%',
          backgroundColor: 'background.default',
        }}
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {navLinksObj.map((linkObj) => {
            return (
              <ListItem button key={linkObj.text}>
                <Link href={linkObj}>
                  <ListItemText
                    primary={linkObj.text}
                    sx={{ textTransform: 'uppercase' }}
                  />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </SwipeableDrawer>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          alignItems: 'center',
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
            mr: 'auto',
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
              display: { xs: 'none', sm: 'inline' },
            }}
          >
            CTT Bernex
          </Typography>
        </Link>
        {navLinksObj.map((linkObj) => {
          return (
            <Link
              key={linkObj.text}
              href={linkObj.to}
              sx={{
                mx: 2,
                px: 1,
                py: 2,
                textTransform: 'uppercase',
                //color: 'primary.main',
                border: '2px solid transparent',
                ':hover': {
                  borderBottomColor: 'primary.main',
                },
                display: { xs: 'none', md: 'none', lg: 'inline' },
              }}
            >
              <Typography variant='h6'>{linkObj.text}</Typography>
            </Link>
          );
        })}
        <IconButton
          sx={{
            p: 2,
            display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
            color: 'primary.main',
          }}
          onClick={toggleDrawer(true)}
        >
          {drawerOpened ? <FiX size={35} /> : <FiMenu size={35} />}
        </IconButton>
      </AppBar>
      {drawer}
    </>
  );
}

export default Navbar;

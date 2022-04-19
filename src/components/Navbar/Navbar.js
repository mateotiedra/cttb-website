import React from 'react';

import NavbarLogic from './NavbarLogic';

import ClubLogo from '../../assets/images/logo.js';
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
import { HashLink as RouterLink } from 'react-router-hash-link';

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
              <ListItem
                button
                key={linkObj.text}
                component={RouterLink}
                to={linkObj.to}
                sx={{
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  '&:hover': { textDecoration: 'none' },
                }}
              >
                <ListItemText primary={linkObj.text} />
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
          backgroundColor: 'background.default',
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
            '&:hover': {
              textDecoration: 'none',
            },
          }}
          component={RouterLink}
          to='/'
        >
          <Box sx={{ height: '55px', width: '55px' }}>
            <ClubLogo />
          </Box>
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
              component={RouterLink}
              to={linkObj.to}
              sx={{
                mx: 2,
                px: 1,
                py: 2,
                textTransform: 'uppercase',
                color: 'text.primary',
                transitionDuration: '500ms',
                border: '2px solid transparent',
                ':hover': {
                  borderBottomColor: !linkObj.button && 'primary.main',
                  textDecoration: 'none',
                  color: !linkObj.button && 'primary.main',
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
            color: 'text.primary',
          }}
          onClick={toggleDrawer(true)}
        >
          {drawerOpened ? <FiX size={25} /> : <FiMenu size={25} />}
        </IconButton>
      </AppBar>
      {drawer}
    </>
  );
}

export default Navbar;

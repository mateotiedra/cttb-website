import React from 'react';

import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Paper,
  Typography,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

import { FiUser } from 'react-icons/fi';

import SectionContainer from '../../components/SectionContainer/SectionContainer';
import MemberManagerLogic from './MemberManagerLogic';
import Navbar from '../../components/Navbar/Navbar';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import Footer from '../../components/Footer/Footer';

function MemberList() {
  return (
    <Paper sx={{ width: '100%', bgcolor: 'background.paper', p: 4 }}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FiUser />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Brunch this weekend?' secondary=' fdsafdsa' />
          <FormControl variant='standard' sx={{ minWidth: 120 }}>
            <InputLabel id='role'>Role</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value='admin'
              label='Age'
              onChange={(value) => {
                console.log(value);
              }}
            >
              <MenuItem value='user'>Membre</MenuItem>
              <MenuItem value='mod'>Modérateur</MenuItem>
              <MenuItem value='admin'>Administrateur</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <Divider variant='inset' component='li' />
      </List>
    </Paper>
  );
}

function MemberManager() {
  const {} = MemberManagerLogic();
  return (
    <>
      <Navbar admin />
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2'>Liste des membres</Typography>
        <MemberList />
      </SectionContainer>
      <Footer />
    </>
  );
}

export default MemberManager;

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
import Loading from '../Loading/Loading';

function MemberList({ userList, onChangeRole, allowedToChange }) {
  return (
    <Paper sx={{ width: '100%', bgcolor: 'background.paper', px: 4, py: 3 }}>
      <List>
        {userList.map((user, id) => {
          return (
            <React.Fragment key={user.email}>
              <ListItem sx={{ my: 1 }}>
                <ListItemAvatar>
                  <Avatar>
                    <FiUser />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.email} />
                <FormControl
                  variant='standard'
                  sx={{ minWidth: 200 }}
                  disabled={!allowedToChange}
                >
                  <InputLabel id='role'>Role</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={user.role}
                    label='Role'
                    onChange={onChangeRole(user.email)}
                  >
                    <MenuItem value='user'>Membre</MenuItem>
                    <MenuItem value='mod'>Modérateur</MenuItem>
                    <MenuItem value='admin'>Administrateur</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              {id < userList.length - 1 && (
                <Divider variant='inset' component='li' />
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
}

function MemberManager() {
  const { pageStatus, userList, onChangeRole, allowedToChangeRole } =
    MemberManagerLogic();

  if (pageStatus === 'loading') return <Loading />;

  return (
    <>
      <Navbar admin />
      <SectionDivider />
      <SectionContainer>
        <Typography variant='h2' sx={{ mb: 2 }}>
          Liste des membres
        </Typography>
        <MemberList
          userList={userList}
          onChangeRole={onChangeRole}
          allowedToChange={allowedToChangeRole}
        />
      </SectionContainer>
      <Footer />
    </>
  );
}

export default MemberManager;

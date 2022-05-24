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
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

import { FiUser, FiTrash2 } from 'react-icons/fi';

import SectionContainer from '../../components/SectionContainer/SectionContainer';
import MemberManagerLogic from './MemberManagerLogic';
import Navbar from '../../components/Navbar/Navbar';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import Footer from '../../components/Footer/Footer';
import Loading from '../Loading/Loading';

function MemberList({
  userList,
  onChangeRole,
  allowedToChange,
  handleOpenDeleteDialog,
}) {
  return (
    <Paper
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        px: { xs: 2, sm: 4 },
        py: 3,
      }}
    >
      <List>
        {userList.map((user, id) => {
          return (
            <React.Fragment key={user.email}>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <FiUser />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.email} />
                <Box
                  sx={{
                    my: 1,
                    pr: 1,
                    gap: 1,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
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
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={handleOpenDeleteDialog(user.email)}
                    disabled={!allowedToChange}
                  >
                    <FiTrash2 />
                  </IconButton>
                </Box>
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

function DeleteDialog({ opened, deleteUser, handleClose }) {
  return (
    <Dialog
      open={opened}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Supprimer le compte'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Cette action supprimera définitement le compte et toutes les données
          associées, les posts d'actualité ne seront pas supprimés.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={deleteUser} autoFocus>
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// https://cttbernex.ch/admin/membres
function MemberManager() {
  const {
    pageStatus,
    userList,
    onChangeRole,
    allowedToChangeRole,
    deleteDialogOpen,
    deleteDialogEmail,
    deleteUser,
    handleCloseDeleteDialog,
    handleOpenDeleteDialog,
  } = MemberManagerLogic();

  if (pageStatus === 'loading') return <Loading />;

  return (
    <>
      <DeleteDialog
        opened={deleteDialogOpen}
        deleteUser={deleteUser(deleteDialogEmail)}
        handleClose={handleCloseDeleteDialog}
      />
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
          handleOpenDeleteDialog={handleOpenDeleteDialog}
        />
      </SectionContainer>
      <Footer />
    </>
  );
}

export default MemberManager;

import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import FormTextField from '../FormTextField/FormTextField';
import Navbar from '../Navbar/Navbar';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionDivider from '../SectionDivider/SectionDivider';
import Footer from '../Footer/Footer';

import EditNewsLogic from './EditNewsLogic';

function DeleteDialog({ opened, deleteNews, handleClose }) {
  return (
    <Dialog
      open={opened}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Supprimer la news</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Cette action supprimera définitement le post d'actualité.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={deleteNews} autoFocus>
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function LinksSection({ links, addLink, updateLink }) {
  return (
    <>
      <SectionDivider h={0.5} />
      <Typography variant='h4'>Liens</Typography>
      <Typography variant='caption'>
        Attention à bien mettre le lien complet : https://example.com/
      </Typography>
      {links &&
        links.map((link, index) => {
          const linkId = 'link-' + index;
          return (
            <Box
              sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}
              key={linkId}
            >
              <TextField
                margin='normal'
                variant='filled'
                id={linkId + '-name'}
                label='Nom du lien'
                onChange={updateLink(index, 'title')}
                value={link.title}
                fullWidth
              />
              <TextField
                margin='normal'
                variant='filled'
                id={linkId + '-adress'}
                label='Nom du lien'
                onChange={updateLink(index, 'adress')}
                value={link.adress}
                fullWidth
              />
            </Box>
          );
        })}
      <Link
        variant='body'
        onClick={addLink}
        sx={{ alignSelf: 'flex-end', cursor: 'pointer' }}
      >
        + Ajouter un lien
      </Link>
    </>
  );
}

function ButtonsSection({ handleOpenDeleteDialog, buttonLoading, newsData }) {
  return (
    <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
      {newsData && (
        <LoadingButton
          variant='outlined'
          disableElevation
          size='large'
          loading={buttonLoading}
          onClick={handleOpenDeleteDialog}
        >
          <FiTrash2 />
        </LoadingButton>
      )}
      <LoadingButton
        variant='contained'
        type='submit'
        disableElevation
        size='large'
        fullWidth
        sx={{ flexGrow: 1 }}
        loading={buttonLoading}
      >
        Sauvegarder
      </LoadingButton>
    </Box>
  );
}

function EditNews({ setPageStatus, pageStatus, newsData }) {
  const {
    errors,
    register,
    onSubmit,
    links,
    addLink,
    updateLink,
    buttonLoading,
    deleteDialogOpen,
    handleCloseDeleteDialog,
    handleOpenDeleteDialog,
    deleteNews,
  } = EditNewsLogic({
    newsData,
    setPageStatus,
  });

  return (
    <>
      <Navbar />
      <DeleteDialog
        opened={deleteDialogOpen}
        handleClose={handleCloseDeleteDialog}
        deleteNews={deleteNews}
      />
      <SectionDivider />
      <SectionContainer>
        <Box
          component='form'
          onSubmit={onSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <FormTextField
            required
            id='title'
            label='Titre'
            autoFocus
            errors={errors}
            registration={register('title', {
              required: true,
            })}
          />
          <FormTextField
            id='description'
            label='Description'
            errors={errors}
            registration={register('description', {})}
            multiline
          />
          <LinksSection
            links={links}
            addLink={addLink}
            updateLink={updateLink}
          />
          <ButtonsSection
            handleOpenDeleteDialog={handleOpenDeleteDialog}
            onSubmit={onSubmit}
            buttonLoading={buttonLoading}
            newsData={newsData}
          />
        </Box>
      </SectionContainer>
      <Footer />
    </>
  );
}
export default EditNews;

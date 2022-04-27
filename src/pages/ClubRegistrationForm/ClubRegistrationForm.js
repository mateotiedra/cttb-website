/* eslint-disable */
import React from 'react';
import {
  TextField,
  Typography,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  InputLabel,
  Select,
  Link,
  Alert,
  AlertTitle,
  Box,
  Divider,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { HashLink as RouterLink } from 'react-router-hash-link';
import ClubRegistrationFormLogic from './ClubRegistrationFormLogic';

import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import Loading from '../Loading/Loading';
import SelectField from '../../components/SelectField/SelectField';
import RegistrationClosedAlert from '../../components/RegistrationClosedAlert/RegistrationClosedAlert';
import RegistrationSuccessAlert from '../../components/RegistrationSuccessAlert/RegistrationSuccessAlert';
import Footer from '../../components/Footer/Footer';

const LateralBox = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: { xs: 2, sm: 3, md: 4, lg: 4 },
      }}
    >
      {props.children}
    </Box>
  );
};

function ClubRegistrationForm(props) {
  const {
    register,
    errors,
    onSubmit,
    pageStatus,
    formDisabled,
    confirmationEmail,
  } = ClubRegistrationFormLogic(props);

  const basicFieldProps = (options) => {
    const required = options.required === undefined ? true : options.required;
    return {
      label: options.label + (required ? ' *' : ''),
      variant: 'filled',
      sx: { flexGrow: 1 },
      ...register(options.id, {
        required: required,
        pattern: options.pattern || /[\s\S]*/,
      }),
      error: errors[options.id] !== undefined,
      disabled: formDisabled,
    };
  };

  const phoneFieldProps = {
    label: 'Téléphone (sans espace)',
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  };

  const AddPhoneInWhatsappField = ({ id }) => {
    return (
      <SelectField
        register={register}
        id={id}
        label='Ajouter le numéro dans le groupe whatsapp'
        options={[
          { value: 'no', text: 'Non' },
          { value: 'yes', text: 'Oui' },
        ]}
        disabled={formDisabled}
      />
    );
  };

  const RegistrantSection = (
    <>
      <LateralBox>
        <TextField
          {...basicFieldProps({
            id: 'lastName',
            label: "Nom de l'inscrit",
          })}
        />
        <TextField
          {...basicFieldProps({
            id: 'firstName',
            label: "Prénom de l'inscrit",
          })}
        />
      </LateralBox>
      <TextField
        {...basicFieldProps({
          id: 'nationality',
          label: 'Nationalité',
        })}
      />
      <TextField
        {...basicFieldProps({
          id: 'adress',
          label: 'Adresse',
        })}
      />
      <TextField
        {...basicFieldProps({
          id: 'birthDate',
          label: 'Date de naissance (jj.mm.aaaa)',
          pattern:
            /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g,
        })}
      />
      <SelectField
        register={register}
        id='gender'
        label='Genre'
        options={[
          { value: 'male', text: 'Masculin' },
          { value: 'female', text: 'Féminin' },
          { value: 'other', text: 'Autre' },
        ]}
        disabled={formDisabled}
      />
      <TextField
        {...basicFieldProps({
          id: 'healthIssues',
          label: 'Problèmes médicaux à signaler (allergies, asthme…)',
          required: false,
        })}
        multiline
      />
      <TextField
        {...basicFieldProps({
          id: 'registrantNumberA',
          required: false,
          ...phoneFieldProps,
        })}
      />
      <AddPhoneInWhatsappField id='registrantAddedInWhatsapp' />
      <Box>
        <TextField
          {...basicFieldProps({
            id: 'avs',
            label: "Numéro d'AVS",
            required: true,
          })}
          fullWidth
        />
        <Typography variant='subtitle2' sx={{ mt: 1 }}>
          Le numéro d'AVS se trouve sur la carte d'assurance et est présent sous
          la forme 756.XXXX.XXXX.XX
        </Typography>
      </Box>
    </>
  );

  const TutorSection = (
    <>
      <Box>
        <Typography variant='h5' sx={{ mb: 1 }}>
          Responsable.s légal/légaux
        </Typography>
        <Typography variant='body1' sx={{ mb: 1 }}>
          Le nom, prénom et téléphone d'au moins un responsable légal doit
          figurer ci-dessous pour les personnes mineures
        </Typography>
        <LateralBox>
          <TextField
            {...basicFieldProps({
              id: 'tutorALastName',
              label: 'Nom',
              required: false,
            })}
          />
          <TextField
            {...basicFieldProps({
              id: 'tutorAFirstName',
              label: 'Prénom',
              required: false,
            })}
          />
        </LateralBox>
      </Box>
      <TextField
        {...basicFieldProps({
          id: 'tutorAPhone',
          required: false,
          ...phoneFieldProps,
        })}
      />
      <AddPhoneInWhatsappField id='tutorAAddedInWhatsapp' />
      <Divider />
      <LateralBox>
        <TextField
          {...basicFieldProps({
            id: 'tutorBLastName',
            label: 'Nom',
            required: false,
          })}
        />
        <TextField
          {...basicFieldProps({
            id: 'tutorBFirstName',
            label: 'Prénom',
            required: false,
          })}
        />
      </LateralBox>
      <TextField
        {...basicFieldProps({
          id: 'tutorBPhone',
          required: false,
          ...phoneFieldProps,
        })}
      />
      <AddPhoneInWhatsappField id='tutorBAddedInWhatsapp' />
    </>
  );

  if (pageStatus === 'loading') return <Loading />;

  return (
    <>
      <Navbar />
      {formDisabled && <RegistrationClosedAlert eventName='le club' />}
      {pageStatus === 'success' && (
        <RegistrationSuccessAlert confirmationEmail={confirmationEmail} />
      )}
      <SectionDivider />
      <SectionContainer sx={{ color: 'primary' }}>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Formulaire d'inscription au club
        </Typography>
        <form onSubmit={onSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <TextField
              {...basicFieldProps({
                id: 'email',
                label: 'Adresse email de contact',
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
            />
            {RegistrantSection}
            {TutorSection}
            <Divider />
            <TextField
              {...basicFieldProps({
                id: 'note',
                label: 'Remarques, questions, ou autre',
                required: false,
              })}
              multiline
            />
            <LoadingButton
              variant='contained'
              type='submit'
              disableElevation
              size='large'
              fullWidth
              sx={{ mt: 3 }}
              disabled={formDisabled}
              loading={pageStatus === 'sending'}
            >
              Envoyer
            </LoadingButton>
          </Box>
        </form>
        <SectionDivider />
      </SectionContainer>
      <Footer />
    </>
  );
}

export default ClubRegistrationForm;

/* eslint-disable */
import React from 'react';
import { TextField, Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import StageLogic from './StageLogic';

import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import WeekPresence from '../../components/WeekPresence/WeekPresence';
import Loading from '../Loading/Loading';
import SelectField from '../../components/SelectField/SelectField';
import RegistrationSuccessAlert from '../../components/RegistrationSuccessAlert/RegistrationSuccessAlert';
import RegistrationClosedAlert from '../../components/RegistrationClosedAlert/RegistrationClosedAlert';
import Footer from '../../components/Footer/Footer';

const LateralBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: { xs: 2, sm: 3, md: 4, lg: 4 },
      }}
    >
      {children}
    </Box>
  );
};

function Stage(props) {
  const {
    register,
    errors,
    onSubmit,
    pageStatus,
    datesOptions,
    weekPresenceChoserDisabled,
    formDisabled,
    confirmationEmail,
    onWeekPresenceChange,
  } = StageLogic(props);

  const basicFieldProps = (options) => {
    const required = options.required === undefined ? true : options.required;
    return {
      label: options.label + (required ? ' *' : ''),
      variant: 'filled',
      sx: { flexGrow: 1 },
      ...register(options.id, {
        required: options.required === undefined ? true : options.required,
        pattern: options.pattern || /[\s\S]*/,
      }),
      error: errors[options.id] !== undefined,
      disabled: formDisabled,
    };
  };

  const RegistrantSection = (
    <>
      <TextField
        {...basicFieldProps({
          id: 'email',
          label: 'Adresse email de contact',
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
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
    </>
  );

  const UrgencyPersonSection = (
    <>
      <Box>
        <Typography variant='h5' sx={{ mb: 1 }}>
          Personne à prévenir en cas d'urgence
        </Typography>
        <LateralBox>
          <TextField
            {...basicFieldProps({
              id: 'urgencyPersonlastName',
              label: 'Nom',
              required: false,
            })}
          />
          <TextField
            {...basicFieldProps({
              id: 'urgencyPersonFirstName',
              label: 'Prénom',
              required: false,
            })}
          />
        </LateralBox>
      </Box>
      <LateralBox>
        <TextField
          {...basicFieldProps({
            id: 'urgencyPersonNumberA',
            label: 'Téléphone 1 (sans espaces)',
            required: false,

            pattern:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          })}
        />
        <TextField
          {...basicFieldProps({
            id: 'urgencyPersonNumberB',
            label: '(Téléphone 2)',
            required: false,
            pattern:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          })}
        />
      </LateralBox>
    </>
  );

  const DatesSection = (
    <>
      <Box>
        <Typography variant='h5'>Dates, horaires et repas</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
            },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Typography variant='body1' sx={{ my: 1 }}>
            Matin (9h-12h) / Pause repas (12h-13h30) / Après-midi (13h30-16h30)
          </Typography>
          <Typography variant='body1' sx={{ color: 'primary.main', mb: 2 }}>
            Attention à ne pas oublier de prévoir un pique-nique !
          </Typography>
        </Box>
        <SelectField
          register={register}
          id='dates'
          label='Dates'
          options={datesOptions}
          disabled={formDisabled}
        />
      </Box>
      <Box>
        <SelectField
          register={register}
          id='allWeek'
          label='Participation toute la semaine'
          options={[
            { value: 'true', text: 'Oui' },
            { value: 'false', text: 'Non' },
          ]}
          disabled={formDisabled}
        />
      </Box>
      <WeekPresence
        disabled={weekPresenceChoserDisabled || formDisabled}
        onChange={onWeekPresenceChange}
      />
    </>
  );

  if (pageStatus === 'loading') return <Loading />;

  return (
    <>
      <Navbar />
      {formDisabled && <RegistrationClosedAlert eventName={'les stages'} />}
      {pageStatus === 'success' && (
        <RegistrationSuccessAlert confirmationEmail={confirmationEmail} />
      )}
      <SectionDivider />
      <SectionContainer sx={{ color: 'primary' }}>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Formulaire d'inscription au stage
        </Typography>

        <form onSubmit={onSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {RegistrantSection}
            {UrgencyPersonSection}
            {DatesSection}
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

export default Stage;

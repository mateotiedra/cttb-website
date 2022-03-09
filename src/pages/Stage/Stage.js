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
} from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

import StageLogic from './StageLogic';
import { Box } from '@mui/system';
import WeekPresence from '../../components/WeekPresence/WeekPresence';

const LateralBox = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 4,
      }}
    >
      {props.children}
    </Box>
  );
};

const SelectField = (props) => {
  return (
    <FormControl variant='filled' fullWidth>
      <InputLabel id={`select-${props.id}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`select-${props.id}-label`}
        id={`select-${props.id}`}
        label={props.label}
        {...props.register(props.id, {
          required: props.required === undefined ? true : props.required,
        })}
        defaultValue={props.options[0].value}
      >
        {props.options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

function Stage(props) {
  const { register, errors, onSubmit, weekPresenceChoserDisabled } =
    StageLogic();

  const basicFieldProps = (options) => {
    return {
      label: options.label,
      variant: 'filled',
      sx: { flexGrow: 1 },
      ...register(options.id, {
        required: options.required === undefined ? true : options.required,
        pattern: options.pattern || /^[A-Za-z]+$/i,
      }),
      error: errors[options.id] !== undefined,
    };
  };

  return (
    <>
      <Navbar />
      <SectionDivider h={2} />
      <SectionContainer sx={{ color: 'primary' }}>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Inscription aux stages
        </Typography>
        <form onSubmit={onSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <LateralBox>
              <TextField
                {...basicFieldProps({ id: 'lastName', label: 'Nom' })}
              />
              <TextField
                {...basicFieldProps({ id: 'firstName', label: 'Prénom' })}
              />
            </LateralBox>
            <TextField
              {...basicFieldProps({
                id: 'adress',
                label: 'Adresse',
                pattern: /[\s\S]*/,
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
            />
            <Box>
              <Typography variant='h5' sx={{ mb: 1 }}>
                Personne à prévenir en cas d'urgence
              </Typography>
              <LateralBox>
                <TextField
                  {...basicFieldProps({
                    id: 'urgencyPersonlastName',
                    label: 'Nom',
                  })}
                />
                <TextField
                  {...basicFieldProps({
                    id: 'urgencyPersonFirstName',
                    label: 'Prénom',
                  })}
                />
              </LateralBox>
            </Box>
            <LateralBox>
              <TextField
                {...basicFieldProps({
                  id: 'urgencyPersonNumberA',
                  label: 'Téléphone 1',
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
            <Box>
              <Typography variant='h5' sx={{ mb: 1 }}>
                Dates, horaires et repas
              </Typography>
              <SelectField
                register={register}
                id='dates'
                label='Dates'
                options={[
                  { value: 'weekA', text: 'Semaine du 8 au 12 août' },
                  { value: 'weekB', text: 'Semaine du 15 au 19 août' },
                ]}
              />
            </Box>
            <SelectField
              register={register}
              id='allWeek'
              label='Participation toute la semaine'
              options={[
                { value: true, text: 'Oui' },
                { value: false, text: 'Non' },
              ]}
            />
            <WeekPresence disabled={weekPresenceChoserDisabled} />
            <Button
              variant='contained'
              type='submit'
              disableElevation
              size='large'
              fullWidth
              sx={{ mt: 3 }}
            >
              Envoyer
            </Button>
          </Box>
        </form>
      </SectionContainer>
    </>
  );
}

export default Stage;

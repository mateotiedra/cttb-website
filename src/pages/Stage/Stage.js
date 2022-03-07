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

function Stage(props) {
  const { register, errors, onSubmit } = StageLogic();

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
            <FormControl variant='filled' fullWidth>
              <InputLabel id='select-gender-label'>Age</InputLabel>
              <Select
                labelId='select-gender-label'
                id='select-gender'
                label='Genre'
                {...register('gender', {
                  required: true,
                })}
                defaultValue='male'
              >
                <MenuItem value={'male'}>Masculin</MenuItem>
                <MenuItem value={'female'}>Féminin</MenuItem>
                <MenuItem value={'other'}>Autre</MenuItem>
              </Select>
            </FormControl>
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
              <FormControl variant='filled' fullWidth>
                <InputLabel id='select-dates-label'>Dates</InputLabel>
                <Select
                  labelId='select-dates-label'
                  id='select-dates'
                  label='Dates'
                  {...register('dates', {
                    required: true,
                  })}
                  defaultValue='weekA'
                >
                  <MenuItem value={'weekA'}>Semaine du 8 au 12 août</MenuItem>
                  <MenuItem value={'weekB'}>Semaine du 15 au 19 août</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <WeekPresence />
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

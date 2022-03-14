import React from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { FiChevronDown } from 'react-icons/fi';

import WeekPresenceLogic from './WeekPresenceLogic';

function WeekPresence({ onChange, ...props }) {
  const { weekPresenceValues, handleChange, accordionOpened, toggleAccordion } =
    WeekPresenceLogic({ onChange });

  const children = (dayIndex) => {
    const dayName = weekPresenceValues[dayIndex].title;
    return (
      <Box
        key={dayName}
        sx={{ display: 'flex', flexDirection: 'column', my: 2, mr: 2 }}
      >
        <Typography variant='h6'>{dayName}</Typography>
        <FormControlLabel
          label='Matin'
          control={
            <Checkbox
              checked={weekPresenceValues[dayIndex].presence[0]}
              onChange={handleChange(dayIndex, 0)}
            />
          }
        />
        <FormControlLabel
          label='Après-midi'
          control={
            <Checkbox
              checked={weekPresenceValues[dayIndex].presence[1]}
              onChange={handleChange(dayIndex, 1)}
            />
          }
        />
      </Box>
    );
  };
  return (
    <Accordion
      disabled={props.disabled}
      expanded={!props.disabled && accordionOpened}
      onChange={toggleAccordion}
    >
      <AccordionSummary
        expandIcon={<FiChevronDown />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>Sinon cocher les cases de participation </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: { md: 'space-between', lg: 'space-between' },
            alignItems: 'end',
            ml: 1,
          }}
        >
          {weekPresenceValues.map((day, dayIndex) => {
            return children(dayIndex);
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default WeekPresence;

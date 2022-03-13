import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import React from 'react';

import TrainingScheduleLogic from './TrainingScheduleLogic';

function TrainingSchedule(props) {
  const { trainingsScheduleObj } = TrainingScheduleLogic();

  const trainingSchedule = (trainingScheduleObj) => {
    return (
      <Paper
        key={trainingScheduleObj.title}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 4,
          flexGrow: 1,
        }}
      >
        <Typography variant='h4'>{trainingScheduleObj.title}</Typography>
        <Typography variant='h6'>{trainingScheduleObj.description}</Typography>
        <Divider sx={{ pt: 1 }} />
        <List>
          {trainingScheduleObj.trainings.map((training) => {
            return (
              <ListItem key={training.day}>
                <ListItemText
                  primary={training.day}
                  secondary={training.hour}
                />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        gap: 2,
      }}
    >
      {trainingsScheduleObj.map((trainingScheduleObj) => {
        return trainingSchedule(trainingScheduleObj);
      })}
    </Box>
  );
}

export default TrainingSchedule;

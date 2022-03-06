import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { FiCornerDownRight } from 'react-icons/fi';
import WeekScheduleLogic from './WeekScheduleLogic';

function WeekSchedule(props) {
  const { WeekScheduleObj } = WeekScheduleLogic();
  const daySchedule = (dayScheduleObj) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: 'background.default',
        }}
      >
        <Typography>{dayScheduleObj.day}</Typography>
        <List>
          {dayScheduleObj.trainings.map((training) => {
            return (
              <ListItem>
                <ListItemText
                  primary={training.type}
                  secondary={training.hour}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };
  return (
    <Paper sx={{ display: 'flex', p: 3 }}>
      {WeekScheduleObj.map((dayScheduleObj) => daySchedule(dayScheduleObj))}
    </Paper>
  );
}

export default WeekSchedule;

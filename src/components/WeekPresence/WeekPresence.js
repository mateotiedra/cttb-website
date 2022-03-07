import { Box, Grid, ListItemText, ListItem, List } from '@mui/material';
import React from 'react';

import WeekPresenceLogic from './WeekPresenceLogic';

function WeekPresence(props) {
  const {} = WeekPresenceLogic();
  const week = ['Lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  return (
    <List>
      {week.map((day) => {
        return (
          <ListItem key={day}>
            <ListItemText primary={day} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default WeekPresence;

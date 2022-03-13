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

import DuesTablesLogic from './DuesTablesLogic';

function DuesTables(props) {
  const { duesTablesObj } = DuesTablesLogic();

  const duesTable = (duesTablesObj) => {
    return (
      <Paper
        key={duesTablesObj.title}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 4,
          flexGrow: 1,
        }}
      >
        <Typography variant='h4'>{duesTablesObj.title}</Typography>
        <Typography variant='h6'>{duesTablesObj.description}</Typography>
        <Divider sx={{ pt: 1 }} />
        <List>
          {duesTablesObj.options.map((option) => {
            return (
              <ListItem key={option.name}>
                <ListItemText
                  primary={option.name}
                  secondary={option.price + ' CHF'}
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
      {duesTablesObj.map((duesTableObj) => {
        return duesTable(duesTableObj);
      })}
    </Box>
  );
}

export default DuesTables;

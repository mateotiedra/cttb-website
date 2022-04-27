import { TextField } from '@mui/material';
import React from 'react';

const FormTextField = ({
  required,
  id,
  label,
  autoComplete,
  autoFocus,
  errors,
  registration,
}) => {
  return (
    <TextField
      margin='normal'
      required={required}
      fullWidth
      id={id}
      label={label}
      name={id}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      variant='filled'
      error={errors[id] !== undefined}
      helperText={errors[id] && errors[id].message}
      {...registration}
    />
  );
};

export default FormTextField;

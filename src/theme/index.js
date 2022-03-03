import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFF100',
    },
    secondary: {
      main: '#232C33',
    },
    background: {
      default: '#232C33',
    },
    text: {
      primary: '#EBF2FA',
    },
    error: {
      main: '#DB3A34',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
    },
    fontFamily: '"Karla", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    body1: {
      fontWeight: 200,
    },
    h4: {
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
});

theme = responsiveFontSizes(theme);

export default theme;

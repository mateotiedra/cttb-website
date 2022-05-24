import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Manage the website theme
let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF100',
    },
    secondary: {
      main: '#232C33',
    },
    background: {
      default: '#191F24',
      paper: '#232C33',
    },
    text: {
      primary: '#FFFFFF',
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
        color: 'primary',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiTextFieldBase: {},
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 14,
  },
});

theme = responsiveFontSizes(theme);

export default theme;

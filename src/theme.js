const primary = '#FFF100';

const theme = {
  colors: {
    text: '#EBF2FA',
    background: '#232C33',
    primary: primary,
    secondary: '#8075FF',
  },
  fonts: {
    body: '"Karla", "Helvetica Neue", sans-serif',
    heading: '"Rubik", sans-serif',
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '3rem',
  ],
  breakpoints: ['600px', '1000px', '1200px'],
  space: ['0rem', '0.5rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem'],
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
        cursor: 'pointer',
      },
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
      '&:hover': {
        bg: 'text',
        color: 'background',
        cursor: 'pointer',
      },
    },
  },
  link: {},
  styles: {
    a: {
      ':hover': {
        cursor: 'pointer',
      },
    },
    navLink: {
      textTransform: 'uppercase',
      fontFamily: 'body',
      color: 'text',
      border: '2px solid transparent',
      ':hover': {
        color: 'primary',
        borderBottom: '2px solid ' + primary,
      },
    },
  },
};

export default theme;

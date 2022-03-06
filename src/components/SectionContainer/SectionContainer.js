import { Box } from '@mui/material';

function SectionContainer(props) {
  return (
    <Box
      id={props.id}
      ref={props.ref}
      sx={{
        px: { xs: 5, lg: 10, ...props.sx },
        maxWidth: '1300px',
        mx: 'auto',
      }}
    >
      {props.children}
    </Box>
  );
}

export default SectionContainer;

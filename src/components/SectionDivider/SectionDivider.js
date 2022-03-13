import { Box } from '@mui/material';

function SectionDivider(props) {
  const h = props.h || 1;
  return <Box sx={{ py: 5 * h }} {...props} />;
}

export default SectionDivider;

import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Loading = () => {
  return (
    <Box align="center" width="100%" py="8rem">
      <CircularProgress size="4rem" />
    </Box>
  );
}

export default Loading;

import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Loading = () => {
  return (
    <Box align="center">
      <CircularProgress size="4rem" />
    </Box>
  );
}

export default Loading;

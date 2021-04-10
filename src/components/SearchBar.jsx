import { Box, TextField } from '@material-ui/core';
import React from 'react';

const SearchBar = props => {
  const { onLocationChange } = props;

  return (
    <Box flexGrow={1} mt="2rem">
      <TextField id="search" label="Search for a location" onChange={onLocationChange} />
    </Box>
  );
};

export default SearchBar;

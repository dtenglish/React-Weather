import { Box, TextField } from '@material-ui/core';
import React from 'react';

const SearchBar = props => {
  const { onLocationChange, error } = props;

  if (error) {
    return (
      <Box mb="1rem">
        <TextField
          error
          id="search"
          label="Search for a location"
          onChange={onLocationChange}
          helperText="Please try a different location"
        />
      </Box>
    );
  } else {
    return (
      <Box mb="1rem">
        <TextField
          id="search"
          label="Search for a location"
          onChange={onLocationChange}
        />
      </Box>
    );
  }
};

export default SearchBar;

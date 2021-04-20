import { TextField } from '@material-ui/core';
import React from 'react';

const SearchBar = props => {
  const { onLocationChange, error } = props;

  if (error) {
    return (
      <TextField
        error
        id="search"
        label="Search for a location"
        fullWidth={true}
        onChange={onLocationChange}
        helperText="Please try a different location"
      />
    );
  } else {
    return (
      <TextField
        id="search"
        label="Search for a location"
        fullWidth={true}
        onChange={onLocationChange}
      />
    );
  }
};

export default SearchBar;

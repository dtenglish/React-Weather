import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';


const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Header Name */}
        <Typography variant="h4" style={{ flex: 1 }}>
          Weather Forecast
        </Typography>
        {/* Settings Menu Button */}
        <IconButton aria-label="settings">
          <SettingsIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

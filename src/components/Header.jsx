import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { useStyles } from '../theme'

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.animatedBackground}>
      <Toolbar>
        {/* Header Name */}
        <Typography variant="h4" className={classes.appTitle}>
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

import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Header Name */}
        <Typography variant="h4" className={classes.typographyStyles}>
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

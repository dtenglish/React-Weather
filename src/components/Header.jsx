import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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
        <Typography className={classes.typographyStyles}>
          Weather Forecast
        </Typography>
        {/* Menu Icon */}
        <SettingsIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

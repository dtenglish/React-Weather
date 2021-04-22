import React from 'react';
import { AppBar, FormControlLabel, Switch, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from '../Theme'

const Header = (props) => {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();
  const label = darkMode === true ? 'Dark Mode' : 'Light Mode';

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" className={classes.animatedBackground}>
      <Toolbar>
        <Typography variant="h4" className={classes.appTitle}>
          Weather Forecast
        </Typography>
        <FormControlLabel
          control={
            <Switch
              className={classes.styledSwitch}
              checked={darkMode}
              onChange={handleChange}
              name="themeToggle"
            />
          }
          label={label}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

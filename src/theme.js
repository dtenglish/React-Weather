import { createMuiTheme, makeStyles } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#397CC7',
    },
    secondary: {
      main: '#3021C8',
    }
  }
});

theme.props = {
  MuiPaper: {
    elevation: 4,
  },
  MuiTextField: {
    color: 'secondary',
    fullWidth: true
  }
}

theme.overrides = {
  MuiDivider: {
    root: {
      background: `
        linear-gradient(270deg,
        ${theme.palette.secondary.main},
        ${theme.palette.primary.main})
      `,
      opacity: '50%',
      height: 1
    },
    middle: {
      margin: '.5rem'
    }
  },
  MuiInput: {
    underline: {
      '&:before': {
        borderBottom: `1px solid ${theme.palette.primary.main}`
      },
      '&:after': {
        borderBottom: `2px solid ${theme.palette.secondary.main}`
      },
      '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: `2px solid ${theme.palette.secondary.main}`
      }
    }
  }
}

export const useStyles = makeStyles(theme => ({
  appTitle: {
    color: `${theme.palette.primary.contrastText}`,
    flex: 1,
  },
  animatedBackground: {
    background: `linear-gradient(
      270deg,
      ${theme.palette.secondary.light},
      ${theme.palette.primary.main}
    )`,
    'background-size': '250% 250%',
    animation: '$animatedGradient 20s ease infinite',
  },
  animatedText: {
    '&:before': {
      background: `linear-gradient(
        270deg,
        ${theme.palette.secondary.light},
        ${theme.palette.primary.main}
      )`,
      'background-size': '200% 200%',
      animation: '$animatedGradient 20s ease infinite',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }
  },
  '@keyframes animatedGradient': {
    '0%': { 'background-position': '0% 50%' },
    '50%': { 'background-position': '100% 50%' },
    '100%': { 'background-position': '0% 50%' },
  }
}));

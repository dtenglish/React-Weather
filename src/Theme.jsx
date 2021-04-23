import { createMuiTheme, makeStyles } from '@material-ui/core';

const coreTheme = {
  typography: {
    'fontFamily': `'Noto Sans KR', 'Helvetica', 'Arial', sans-serif`,
    'fontWeightLight': 300,
    'fontWeightRegular': 400,
    'fontWeightBold': 700
  }
};

const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#397CC7',
    },
    secondary: {
      main: '#3021C8',
    },
    info: {
      main: '#5A94D5'
    }
  },
  ...coreTheme
};

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#397CC7',
    },
    secondary: {
      main: '#968EE8',
    },
    info: {
      main: '#5A94D5'
    }
  },
  ...coreTheme
};

export const createTheme = darkMode => {
  const theme = createMuiTheme(darkMode === true ? darkTheme : lightTheme);

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
        ${theme.palette.primary.main}),
        ${theme.palette.info.main}
      `,
        opacity: '50%'
      },
      middle: {
        margin: '.5rem'
      }
    },
    MuiFormHelperText: {
      root: {
        position: 'absolute',
        top: 48
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
    },
    MuiTypography: {
      h1: {
        fontWeight: '400'
      },
      h2: {
        fontSize: '1.75rem',
        fontWeight: '400'
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: '500',
        'letter-spacing': '1px'
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: '500'
      }
    }
  }

  return theme;
}

export const useStyles = makeStyles(theme => ({
  appTitle: {
    color: `${theme.palette.primary.contrastText}`,
    flex: 1,
    fontSize: '2rem',
    fontWeight: '400'
  },
  iconPrimary: {
    fontSize: '9rem'
  },
  iconSecondary: {
    fontSize: '3rem'
  },
  styledSwitch: {
    '& .Mui-checked': {
      color: `${theme.palette.action.active}`
    },
    '& .Mui-checked + .MuiSwitch-track': {
      backgroundColor: `${theme.palette.common.white}`
    }
  },
  animatedBackground: {
    background: `linear-gradient(
      270deg,
      ${theme.palette.secondary.light},
      ${theme.palette.primary.main},
      ${theme.palette.info.main}
    )`,
    'background-size': '400% 40%',
    animation: '$animatedGradient 30s ease infinite',
  },
  animatedText: {
    '&:before': {
      background: `linear-gradient(
        270deg,
        ${theme.palette.secondary.light},
        ${theme.palette.primary.main},
        ${theme.palette.info.main}
      )`,
      'background-size': '400% 400%',
      animation: '$animatedGradient 30s ease infinite',
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

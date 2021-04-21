import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1566C0',
    },
    secondary: {
      main: '#3021C8',
    },
  },
});

theme.props = {
  MuiPaper: {
    elevation: 4,
  },
  MuiTextField: {
    color: 'secondary',
  },
}

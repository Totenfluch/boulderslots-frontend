import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#c6f24a', 
      main: '#92bf00', 
      dark: '#5f8f00', 
      contrastText: '#000000', 
    },
    dark: {
      light: '#1c1c1c', 
      main: '#1c1c1c', 
      dark: '#1c1c1c', 
      backgroundColor: '#1c1c1c',
      contrastText: '#ffffff', 
    },
  },
});

export default theme;
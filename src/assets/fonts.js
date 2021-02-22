import { createMuiTheme } from '@material-ui/core/styles';

const themeFont = createMuiTheme({
  typography: {
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
  },
});

export default themeFont;

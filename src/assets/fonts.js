import { createTheme } from '@mui/material/styles';

const themeFont = createTheme({
  typography: {
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
  },
});

export default themeFont;

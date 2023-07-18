import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)({
  root: {
    backgroundColor: '#fff',
    borderRadius: 8,
    boxSizing: 'border-box',
    fontSize: '1em',
    padding: '7px 10px',
  },
}) as typeof Button;

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginRight: '5px',
          border: '1px solid #7F8CFF',
          color: '#4053FC',
          '&:hover': {
            backgroundColor: '#6070FF',
            color: '#fff',
            boxShadow: '0 8px 16px rgba(64, 83, 252, 0.24)',
          },
          "&.Mui-disabled": {
            background: "#EBEBFF",
            color: "#4053FC",
            border: 'none',
          }
        }
      }
    }
  },
  typography: {
    button: {
      textTransform: 'none',
      marginRight: '5px',
    },
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});

export default StyledButton;

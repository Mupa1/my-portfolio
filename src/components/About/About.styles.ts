import { type Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '1440px',
  },
  details: {
    padding: 0,
    '@media (max-width: 1440px)': {
      padding: '0 89px',
    },
    '@media (max-width: 900px)': {
      padding: '0 15px',
    },
  },
}));

export default useStyles;

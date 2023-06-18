import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px',
    '@media (max-width: 480px)': {
      padding: '10px 10px',
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
}));

export default useStyles;

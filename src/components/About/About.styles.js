import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '50px 100px',
    '@media (max-width: 900px)': {
      padding: '50px 10px',
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
}));

export default useStyles;

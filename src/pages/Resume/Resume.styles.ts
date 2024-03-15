import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  download: {
    position: 'fixed',
    top: 8,
    right: 55,
    zIndex: 10000,
    '@media (min-width: 900px)': {
      top: 12,
      right: 300,
    },
  },
  document: {
    '@media (min-width: 900px)': {
      marginTop: '10px',
    },
  },
}));

export default useStyles;

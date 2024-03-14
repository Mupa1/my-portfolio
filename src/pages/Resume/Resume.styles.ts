import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    backgroundColor: 'white',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  download: {
    position: 'absolute',
    top: 3,
    zIndex: 1000,
  },
}));

export default useStyles;

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
    paddingTop: '12px',
    position: 'absolute',
    top: 0,
    zIndex: 1000,
  },
  pdf: {},
}));

export default useStyles;

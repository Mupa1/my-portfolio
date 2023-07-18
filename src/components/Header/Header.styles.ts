import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '50px',
    maxWidth: '1440px',
    backgroundColor: '#fff',
  },
  appBar: {
    margin: 'auto',
    color: '#344563',
    backgroundColor: '#fff',
    paddingRight: '79px',
    paddingLeft: '79px',
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
  logoBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: '64px',
    height: '64px',
  },
  munuItem: {
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  menuButtonDesktop: {
    marginLeft: '38px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  menuButton: {
    fontWeight: 500,
    color: '#344563',
    '&:hover': {
      color: '#6070ff',
      backgroundColor: '#fff',
      fontWeight: 700,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    paddingRight: '100px',
    width: '80%',
  },
}));

export default useStyles;

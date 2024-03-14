import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '50px',
    maxWidth: '1440px',
    backgroundColor: '#fff',
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
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
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  logo: {
    width: '48px',
    height: '48px',
    '@media (max-width: 900px)': {
      width: '32px',
      height: '32px',
    },
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
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;

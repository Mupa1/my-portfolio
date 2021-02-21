import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '50px',
  },
  appBar: {
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
  menuButton: {
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
    color: '#344563',
  },
  mobileMenuButton: {
    borderBottom: '1px solid #344563',
    color: '#344563',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 50px',
    width: '80%',
  },
}));

export default useStyles;

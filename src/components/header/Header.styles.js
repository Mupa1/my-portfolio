import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    color: '#344563',
    backgroundColor: '#fff',
    paddingRight: '79px',
    paddingLeft: '79px',

    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
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
    padding: '20px 30px',
  },
}));

export default useStyles;

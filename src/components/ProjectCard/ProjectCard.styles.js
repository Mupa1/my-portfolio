import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 0 50px',
    // '& .MuiButtonBase-root': {
    //   marginRight: '5px',
    //   border: '1px solid #7F8CFF',
    //   color: '#4053FC',
    //   '&:hover': {
    //     backgroundColor: '#6070FF',
    //     color: '#fff',
    //     boxShadow: '0 8px 16px rgba(64, 83, 252, 0.24)',
    //   },
    // },
    '@media (max-width: 480px)': {
      padding: '10px 10px 0 10px',
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    borderRadius: '24px',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '10px 10px 30px 10px rgba(0, 0, 0, 12%)',
    },
  },
  imageBox: {
    width: '100%',
    borderRadius: '8px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '448px',
    borderRadius: '8px',
  },
  sourceLink: {
    fontSize: '0.75em',
    borderRadius: '8px',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '100px 100px 0 100px',
    '@media (max-width: 900px)': {
      padding: '100px 10px 0 10px',
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
  techStack: {
    fontSize: '0.75rem',
    margin: '5px 5px 5px',
    borderRadius: '8px',
  },
  liveLink: {
    marginRight: '5px',
  },
}));

export default useStyles;

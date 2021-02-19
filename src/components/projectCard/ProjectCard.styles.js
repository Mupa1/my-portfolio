import { makeStyles, withStyles, Button } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
    // maxWidth: 500,
    // height: '496px',
    borderRadius: '24px',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0px 8px 32px rgba(64, 83, 252, 0.24)',
      border: '1px solid #6070FF',
    },
  },
  image: {
    width: '100%',
    maxHeight: '448px',
    background: '#e5e5e5',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '8px',
  },
  techStack: {
    fontSize: '12px',
    margin: '5px 5px 5px',
    borderRadius: '8px',
  },
  liveLink: {
    marginRight: '5px',
  },
}));

export const StyledButton = withStyles({
  root: {
    backgroundColor: '#fff',
    borderRadius: 8,
    boxSizing: 'border-box',
    border: '1px solid #7F8CFF',
    color: '#6070FF',
    fontSize: '16px',
    padding: '7px 10px',
    '&:hover': {
      backgroundColor: '#6070FF',
      color: '#fff',
      boxShadow: '0px 8px 16px rgba(64, 83, 252, 0.24)',
    },
  },
})(Button);

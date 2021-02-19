import { makeStyles, withStyles, Button } from '@material-ui/core';
import footerBg from '../../assets/footerBg.png';

export const useStyles = makeStyles(() => ({
  contact: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#6070FF',
    backgroundImage: `url(${footerBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderTopLeftRadius: '80px',
    padding: '50px 10px',
    '@media (max-width: 900px)': {
      height: 'auto',
    },
  },
  formContainer: {
    maxWidth: '447px',
    margin: 'auto',
  },
  fields: {
    width: '100%',
    borderRadius: '2px',
    padding: '12px 0 12px 10px',
    border: '1px solid #cfd8dc',
    resize: 'none',
    '&::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: '#cfd8dc',
      fontFamily: "'Roboto', sans-serif",
    },
    '&:-ms-input-placeholder': { /* Internet Explorer 10-11 */
      color: '#cfd8dc',
      fontFamily: "'Roboto', sans-serif",
    },
    '&::-ms-input-placeholder': { /* Microsoft Edge */
      color: '#cfd8dc',
      fontFamily: "'Roboto', sans-serif",
    },
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

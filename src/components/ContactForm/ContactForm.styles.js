import { makeStyles } from '@mui/styles';
import footerBg from '../../assets/footerBg.png';

const useStyles = makeStyles(() => ({
  root: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#6070FF',
    backgroundImage: `url(${footerBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderTopLeftRadius: '80px',
    padding: '50px 0',
    '@media (max-width: 900px)': {
      height: 'auto',
    },
    '& .MuiButtonBase-root': {
      backgroundColor: '#fff',
      border: '1px solid #fff',
      color: '#6070FF',
      '&:hover': {
        backgroundColor: '#6070FF',
        color: '#fff',
        boxShadow: '0 8px 16px rgba(64, 83, 252, 0.24)',
      },
    }
  },
  formContainer: {
    maxWidth: '447px',
    margin: '10px auto',
    padding: '10px',
  },
  text: {
    margin: 'auto',
  },
  fields: {
    width: '90%',
    height: 'calc(100% - 20px);',
    borderRadius: '8px',
    padding: '12px 0 12px 10px',
    border: '1px solid #cfd8dc',
    margin: '10px 0',
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

export default useStyles;

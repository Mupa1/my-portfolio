import { makeStyles } from '@mui/styles';
import landingBg from '../../assets/landingBg.png';

const useStyles = makeStyles(() => ({
  root: {
    '&:-moz-box-sizing': 'border-box',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    color: '#344563',
    backgroundColor: '#fff',
    backgroundImage: `url(${landingBg})`,
    height: 'calc(100vh - 54px)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderBottomLeftRadius: '80px',
    padding: '15px',
  },
  landingInfo: {
    maxWidth: '900px',
    padding: '0 220px',

    '@media (max-width: 900px)': {
      padding: '0 10px',
      paddingBottom: '150px',
    },
    '@media (max-width: 480px)': {
      padding: '0 10px',
      paddingBottom: '60px',
    },

    '@media (max-width: 320px)': {
      marginTop: '-50px',
      paddingBottom: '20px',
    },
  },
  spacing: {
    padding: '20px 0',
  },
  socialIcons: {
    color: '#344563',
    paddingRight: '20px',
  },
}));

export default useStyles;

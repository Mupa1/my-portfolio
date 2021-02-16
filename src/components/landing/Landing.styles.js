import { makeStyles } from '@material-ui/core';
import landingBg from '../../assets/landingBg.png';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '20vh',
    color: '#344563',
    backgroundColor: '#fff',
    backgroundImage: `url(${landingBg})`,
    height: '80vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderBottomLeftRadius: '50px',
  },
  landingInfo: {
    padding: '0 200px',

    '@media (max-width: 900px)': {
      padding: '0 10px',
    },
  },
  mainH1: {
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      marginTop: '-20px',
    },
  },
  spacing: {
    padding: '20px 0',
  },
  connect: {
    color: '#7F8CFF',
  },
  socialIcons: {
    color: '#344563',
    paddingRight: '20px',
  },
}));

export default useStyles;

import { type Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    maxWidth: '1440px',
    margin: 'auto',
    flexGrow: 1,
    padding: '50px 106px 0 106px',
    '@media (max-width: 1440)': {
      padding: '50px 50px 0 50px',
    },
    '@media (max-width: 900px)': {
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

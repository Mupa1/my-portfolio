import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: '50px',
    '@media (max-width: 480px)': {
      paddingBottom: '10px',
    },
  },
  techStack: {
    fontSize: '0.75em',
    borderRadius: '8px',
  },
}));

export default useStyles;

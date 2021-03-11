import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: '100px',
    '@media (max-width: 900px)': {
      paddingBottom: '88px',
    },
  },
  techStack: {
    fontSize: '0.75em',
    margin: '5px 5px 5px',
    borderRadius: '8px',
  },
}));

export default useStyles;

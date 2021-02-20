import { withStyles, Button } from '@material-ui/core';

const StyledButton = withStyles({
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

export default StyledButton;

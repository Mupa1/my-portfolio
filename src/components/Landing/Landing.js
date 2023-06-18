/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import useStyles from './Landing.styles';
import SocialIcons from '../SocialIcons/SocialIcons';

const Landing = ({ props }) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <article className={classes.landingInfo}>
        <Typography variant="h3" component="h1" className={classes.spacing} sx={{ fontWeight: 'bold', }}>
          Hey There.
          <br />
          {' '}
          I&apos;m Mupa
        </Typography>
        <Typography variant="h6" component="h2">
          I&apos;m a frontend engineer
        </Typography>
        <Typography variant="body1" gutterBottom> I enjoy building beautiful, user-friendly websites and web applications. Look through some of my work and experiences! If you like what you see and have a project you need to be coded, don&apos;t hesitate to contact me. </Typography>
        <SocialIcons />
      </article>
    </section>
  );
};

Landing.defaultProps = {
  props: () => {},
};

Landing.propTypes = {
  props: PropTypes.func,
};

export default Landing;

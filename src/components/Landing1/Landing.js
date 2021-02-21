/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme, responsiveFontSizes, ThemeProvider,
} from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import useStyles from './Landing.styles';
import SocialIcons from '../SocialIcons/SocialIcons';

const Landing = ({ props }) => {
  const classes = useStyles(props);
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  const landingInfo = () => (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" component="h1" className={classes.spacing} style={{ fontWeight: 'bold', }}>
        Hey There.
        <br />
        {' '}
        I&apos;m Mupa
      </Typography>
      <Typography variant="h5" component="h2">
        I&apos;m a full stack developer
      </Typography>
    </ThemeProvider>
  );

  return (
    <section className={classes.root}>
      <article className={classes.landingInfo}>
        {landingInfo()}
        <p> I enjoy building beautiful, user-friendly websites and web applications. Look through some of my work and experiences! If you like what you see and have a project you need to be coded, don&apos;t hesitate to contact me. </p>
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

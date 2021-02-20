/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { useStyles, StyledButton } from './About.styles';

const About = ({ props }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const classes = useStyles(props);
  const theme = createMuiTheme({
    palette: {
      action: {
        disabledBackground: '#EBEBFF',
        disabled: '#6070FF',
      },
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/maypayal',
      data: new FormData(form)
    })
      .then(() => {
        handleServerResponse(true, 'Message sent successfully! Thanks!', form);
      })
      .catch(err => {
        handleServerResponse(false, err.response.data.error, form);
      });
  };

  const getAbout = () => (
    <form onSubmit={handleOnSubmit}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={`${classes.inputs} ${classes.fields}`}
            required
          />
        </Grid>
        <Grid item>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={`${classes.inputs} ${classes.fields}`}
            required
          />
        </Grid>
        <Grid item>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className={classes.fields}
            required
          />
        </Grid>
        <Grid item>
          <ThemeProvider theme={theme}>
            <StyledButton type="submit" disabled={serverState.submitting}>
              Get in touch
            </StyledButton>
          </ThemeProvider>
        </Grid>
        {serverState.status && (
          <p className={!serverState.status.ok ? 'Error' : ''}>
            {serverState.status.msg}
          </p>
        )}
      </Grid>
    </form>
  );

  return (
    <footer className={classes.root} id="contact" name="contact">
      <article className={classes.formContainer}>
        <Typography gutterBottom variant="h4" component="h2" style={{ fontWeight: 'bold', }}>
          Contact me
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have an application you are interested in developing that you need built or a project that needs coding. I&apos;d love to help  with it.
        </Typography>
        {getAbout()}
      </article>
    </footer>
  );
};

About.defaultProps = {
  props: () => { },
};

About.propTypes = {
  props: PropTypes.func,
};

export default About;

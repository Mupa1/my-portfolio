/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useStyles, StyledButton } from './Footer.styles';

const Footer = ({ props }) => {
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

  // let theme = createMuiTheme();
  // theme = responsiveFontSizes(theme);

  const footerForm = () => (
    <form action="https://formspree.io/maypayal" method="post">
      <Grid xs container spacing={2} direction="column">
        <Grid item xs>
          <input type="text" name="name" id="name" placeholder="Enter name" className={`${classes.inputs} ${classes.fields}`} />
        </Grid>
        <Grid item xs>
          <input type="email" name="email" id="email" placeholder="Enter email" className={`${classes.inputs} ${classes.fields}`} />
        </Grid>
        <Grid item xs>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message here" className={classes.fields} />
        </Grid>
        <Grid item xs>
          <ThemeProvider theme={theme}>
            <StyledButton>
              Get in touch
            </StyledButton>
          </ThemeProvider>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <footer id="projects" name="projects" className={classes.root}>
      <section className={classes.contact}>
        <article className={classes.formContainer}>
          <Typography gutterBottom variant="h4" component="h2" style={{ fontWeight: 'bold', }}>
            Contact me
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you have an application you are interested in developing that you need built or a project that needs coding. I&apos;d love to help  with it.
          </Typography>
          {footerForm()}
        </article>
      </section>
    </footer>
  );
};

Footer.defaultProps = {
  props: () => {},
};

Footer.propTypes = {
  props: PropTypes.func,
};

export default Footer;

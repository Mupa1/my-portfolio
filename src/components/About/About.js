/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'react-external-link';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Grid, Paper, Typography,
} from '@material-ui/core';
import useStyles from './About.styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import StyledButton from '../StyledButton/StyledButton';

const About = ({ props }) => {
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

  return (
    <article className={classes.root} id="about" name="about">
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h4" component="h2" style={{ fontWeight: 'bold', }}>
              About me
            </Typography>
            <p> I enjoy building beautiful, user-friendly websites and web applications. Look through some of my work and experiences! If you like what you see and have a project you need to be coded, don&apos;t hesitate to contact me. </p>
            <SocialIcons />
            <ThemeProvider theme={theme}>
              <ExternalLink href="https://docs.google.com/document/d/1oxxxVT-Vl2mcb0P8pg_EK_0UnQU_FIuZqdYFDq14hQA/edit">
                <StyledButton>
                  Get My Resume
                </StyledButton>
              </ExternalLink>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6} container spacing={2} direction="column">
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="h3" style={{ fontWeight: 'bold', }}>
                Skills
              </Typography>
              <p> Semantic HTML - Responsive Design - CSS Preprocessing - DOM manipulation - UI Engineering - OOP - MVC - RESTful APIs - TDD / BDD - Unit Testing - Refactoring - Deployment - Relational Databases - Version Control - Git Flow - Pair Programming - Wireframing </p>
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="h3" style={{ fontWeight: 'bold', }}>
                Technology
              </Typography>
              <p> HTML5 - CSS3 - SCSS - JavaScript - Webpack - React - Redux - Material UI - Bootstrap - Ruby - Ruby on Rails - PostgreSQL - MySQL - NodeJS - RSpec - Jest - REST APIs - Webpack - NPM - Git - Figma - Netlify </p>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </article>
  );
};

About.defaultProps = {
  props: () => { },
};

About.propTypes = {
  props: PropTypes.func,
};

export default About;

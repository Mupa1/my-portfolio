/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Paper, Typography,
} from '@material-ui/core';
import useStyles from './About.styles';

const About = ({ props }) => {
  const classes = useStyles(props);

  return (
    <article className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography gutterBottom variant="h4" component="h2" style={{ fontWeight: 'bold', }}>
              About me
            </Typography>
            <p> I enjoy building beautiful, user-friendly websites and web applications. Look through some of my work and experiences! If you like what you see and have a project you need to be coded, don&apos;t hesitate to contact me. </p>
            <p className={classes.connect}>LETS CONNECT</p>
          </Grid>
          <Grid item xs={12} md={5} container spacing={2} direction="column">
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="h3" style={{ fontWeight: 'bold', }}>
                Skills
              </Typography>
              <p>Semantic HTML - Responsive Design - CSS Preprocessing - DOM manipulation - UI Engineering - OOP - MVC - RESTful APIs - TDD / BDD - Unit Testing - Refactoring - Deployment - Relational Databases - Version Control - Git Flow - Pair Programming - Wireframing</p>
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="h3" style={{ fontWeight: 'bold', }}>
                Technology
              </Typography>
              <p>HTML5 - CSS3 - SCSS - JavaScript - Webpack - React - Redux - Material UI - Bootstrap - Ruby - Ruby on Rails - PostgreSQL - MySQL - NodeJS - Rspec - Jest - REST APIs - Webpack - NPM - Git - Figma - Netlify</p>
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

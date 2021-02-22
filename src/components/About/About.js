/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ExternalLink } from 'react-external-link';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Grid, Paper, Typography,
} from '@material-ui/core';
import { skillsAndTech } from '../../data';
import useStyles from './About.styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import { StyledButton, theme } from '../StyledButton/StyledButton';

const About = ({ props }) => {
  const classes = useStyles(props);

  const getSkillAndTech = () => skillsAndTech.map(data => (
    <Grid item xs key={uuidv4}>
      <Typography gutterBottom variant="h5" component="h3" style={{ fontWeight: 'bold', }}>
        {data.title}
      </Typography>
      <Typography variant="body1" gutterBottom>{data.description}</Typography>
    </Grid>
  ));

  return (
    <article className={classes.root} id="about" name="about">
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h4" component="h2" style={{ fontWeight: 'bold', }}>
              About me
            </Typography>
            <Typography variant="body1" gutterBottom>
              {' '}
              I am a self-taught full-stack developer with a background in graphic design.
              <br />
              I have always been fascinated by software&apos;s potentials as a designer. So I learned web development by building multiple websites and web applications.
              <br />
              Currently, I am looking for a position as a front-end or full-stack developer, joining an experienced team and contribute to building great products.
              {' '}
            </Typography>
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
            {getSkillAndTech()}
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

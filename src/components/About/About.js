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
      <Typography gutterBottom variant="h6" component="h3" style={{ fontWeight: 'bold', }}>
        {data.title}
      </Typography>
      <p>{data.description}</p>
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

/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'react-external-link';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  Grid, Paper, Typography, ButtonBase,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from './ProjectCard.styles';
import StyledButton from '../StyledButton/StyledButton';

const ProjectCard = ({ props, project, techStack }) => {
  const {
    imageSrc, title, description, live, github,
  } = project;
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
    <article className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <ButtonBase className={classes.imageSrc}>
              <img className={classes.img} src={imageSrc} alt="card" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} md={5} container spacing={2}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="h2" style={{ fontWeight: 'bold', }}>
                  {title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {description}
                </Typography>
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <>{techStack}</>
                </ThemeProvider>
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <ExternalLink href={live}>
                    <StyledButton className={classes.techStack} endIcon={<VisibilityIcon />}>
                      See Live
                    </StyledButton>
                  </ExternalLink>
                  <ExternalLink href={github}>
                    <StyledButton className={classes.techStack} endIcon={<GitHubIcon />}>
                      Source
                    </StyledButton>
                  </ExternalLink>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </article>
  );
};

ProjectCard.defaultProps = {
  props: () => { },
};

ProjectCard.propTypes = {
  props: PropTypes.func,
  techStack: PropTypes.instanceOf(Object).isRequired,
  project: PropTypes.shape({
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    live: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;

/* eslint-disable comma-dangle */
import PropTypes from 'prop-types';
import { ExternalLink } from 'react-external-link';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Grid, Paper, Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useStyles from './ProjectCard.styles';
import { StyledButton, theme } from '../StyledButton/StyledButton';

const ProjectCard = ({ props, project, techStack }) => {
  const {
    imageSrc, title, description, live, github,
  } = project;
  const classes = useStyles(props);

  return (
    <article className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} className={classes.imageBox} mr={-1}>
            <div className={classes.image}>
              <img className={classes.img} src={imageSrc} alt="card" />
            </div>
          </Grid>
          <Grid item xs={12} md={5} container spacing={2} ml={-1} mt={{ md: .8 }} mb={2}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="h2" sx={{ fontWeight: 'bold', }}>
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
                    <StyledButton className={classes.sourceLink} endIcon={<VisibilityIcon />}>
                      See Live
                    </StyledButton>
                  </ExternalLink>
                  <ExternalLink href={github}>
                    <StyledButton className={classes.sourceLink} endIcon={<GitHubIcon />}>
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

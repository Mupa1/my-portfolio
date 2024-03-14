/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider } from '@mui/material';
import { Grid, Paper, Typography } from '@mui/material';
import { skillsAndTech } from '../../data';
import useStyles from './About.styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import { StyledButton, theme } from '../StyledButton/StyledButton';
import { IComponentProps } from '../../entities/types';

const About: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  const getSkillAndTech = () =>
    skillsAndTech.map((data) => (
      <Grid item xs key={uuidv4()}>
        <Typography
          gutterBottom
          variant='h5'
          component='h3'
          sx={{ fontWeight: 'bold' }}
        >
          {data.title}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {data.description}
        </Typography>
      </Grid>
    ));

  return (
    <article className={classes.root}>
      <Paper
        className={classes.paper}
        elevation={0}
        sx={{ borderTopRightRadius: '80px' }}
      >
        <Grid container spacing={2} className={classes.details}>
          <Grid item xs={12} md={6}>
            <Typography
              gutterBottom
              variant='h4'
              component='h2'
              sx={{ fontWeight: 'bold' }}
            >
              About me
            </Typography>
            <Typography variant='body1' gutterBottom>
              {' '}
              I am a dedicated and detail-oriented frontend developer with
              3years of professional experience. I&apos;m Passionate about
              building engaging user interfaces.
              <br />
              I&apos;ve a proven record of collaboration in cross-functional
              teams and working independently to develop exceptional web
              applications.
              <br />
              Specialized in React, Redux, HTML, CSS, JavaScript and TypeScript
              and open to new opportunities.
            </Typography>
            <SocialIcons />
            <ThemeProvider theme={theme}>
              <a href='./resume.pdf' download='MupaNzaphilaResume.pdf'>
                <StyledButton arial-label='download'>
                  Download Resume
                </StyledButton>
              </a>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6} container spacing={2} direction='column'>
            {getSkillAndTech()}
          </Grid>
        </Grid>
      </Paper>
    </article>
  );
};

export default About;

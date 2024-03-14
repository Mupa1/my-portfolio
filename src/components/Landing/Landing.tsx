/* eslint-disable max-len */
import { Typography } from '@mui/material';
import useStyles from './Landing.styles';
import SocialIcons from '../SocialIcons/SocialIcons';
import { IComponentProps } from '../../entities/types';

const Landing: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <article className={classes.landingInfo}>
        <Typography
          variant='h3'
          component='h1'
          className={classes.spacing}
          sx={{ fontWeight: 'bold' }}
        >
          Hey There.
          <br /> I&apos;m Mupa
        </Typography>
        <Typography variant='h6' component='h2'>
          I&apos;m a frontend developer,
        </Typography>
        <Typography variant='body1' gutterBottom>
          dedicated, self-driven and detail-oriented
          with extensive experience building user-facing applications.
          <br />
          I enjoy building beautiful, engaging, and user-friendly user interfaces.
          Look through some of my work and experiences!
          <br />
          If you like what you see and have a project you need to be coded,
          don&apos;t hesitate to contact me.
        </Typography>
        <SocialIcons />
      </article>
    </section>
  );
};

export default Landing;

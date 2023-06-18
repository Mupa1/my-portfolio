/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@mui/material';
import { ExternalLink } from 'react-external-link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import useStyles from './SocialIcons.styles';

const SocialIcons = ({ props }) => {
  const classes = useStyles(props);

  const socialIcons = [
    {
      icon: <GitHubIcon />,
      href: 'https://github.com/Mupa1',
    },
    {
      icon: <TwitterIcon />,
      href: 'https://twitter.com/mupa_mmbetsa',
    },
    {
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/mupa-mmbetsa',
    },
  ];

  const getSocialIcons = () => socialIcons.map(({ icon, href }) => (
    <li key={uuidv4()}>
      <ExternalLink href={href} className={classes.socialIcons}>
        {icon}
      </ExternalLink>
    </li>
  ));

  return (
    <>
      <Typography className={classes.connect}>LETS CONNECT</Typography>
      <ul>{getSocialIcons()}</ul>
    </>
  );
};

SocialIcons.defaultProps = {
  props: () => { },
};

SocialIcons.propTypes = {
  props: PropTypes.func,
};

export default SocialIcons;

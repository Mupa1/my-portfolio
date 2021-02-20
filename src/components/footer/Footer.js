import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Footer.styles';
import ContactForm from '../ContactForm/ContactForm';

const Footer = ({ props }) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <ContactForm />
    </section>
  );
};

Footer.defaultProps = {
  props: () => {},
};

Footer.propTypes = {
  props: PropTypes.func,
};

export default Footer;

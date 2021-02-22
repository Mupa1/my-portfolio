import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Footer.styles';
import About from '../About/About';
import ContactForm from '../ContactForm/ContactForm';

const Footer = ({ props }) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <About />
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

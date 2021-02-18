/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Portfolio from '../projects/Projects';
import Landing from '../landing/Landing';
import useStyles from './Home.styles';

const Home = ({ props }) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <Header />
      <Landing />
      <Portfolio />
    </section>
  );
};

Home.defaultProps = {
  props: () => {},
};

Home.propTypes = {
  props: PropTypes.func,
};

export default Home;

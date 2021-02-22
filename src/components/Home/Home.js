import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Portfolio from '../Projects/Projects';
import Landing from '../Landing/Landing';
import useStyles from './Home.styles';
import Footer from '../Footer/Footer';

const Home = ({ props }) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <Header />
      <Landing />
      <Portfolio />
      <Footer />
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

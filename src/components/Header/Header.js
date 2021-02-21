import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import ElevationScroll from '../ElevationScroll';
import { headersData } from '../../data';
import logo from '../../assets/logo2.png';
import useStyles from './Header.styles';

const { Link } = Scroll;

const Header = ({ props }) => {
  const classes = useStyles(props);

  const [view, setView] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = view;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setView(prevState => ({ ...prevState, mobileView: true }))
      : setView(prevState => ({ ...prevState, mobileView: false })));
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const getMenuButtons = () => headersData.map(({ label, href }) => (
    <Link
      key={label}
      to={href}
      spy
      smooth
      offset={-70}
      duration={500}
      className={classes.menuButton}
    >
      {label}
    </Link>
  ));

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <img src={logo} alt="Logo" />
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );

  const getDrawerChoices = () => headersData.map(({ label, href }) => (
    <Link
      key={label}
      to={href}
      spy
      smooth
      offset={-70}
      duration={500}
      className={classes.mobileMenuButton}
    >
      <MenuItem>{label}</MenuItem>
    </Link>
  ));

  const displayMobile = () => {
    const handleDrawerOpen = () => setView(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setView(prevState => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div className={classes.logoBox}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <IconButton
            edge="end"
            arial-label="menu"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <header className={classes.root}>
      <ElevationScroll props>
        <AppBar className={classes.appBar}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </ElevationScroll>
    </header>
  );
};

Header.defaultProps = {
  props: () => {},
};

Header.propTypes = {
  props: PropTypes.func,
};

export default Header;

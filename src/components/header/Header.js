import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useStyles from './Header.styles';

const headersData = [
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Header = ({ props }) => {
  const styles = useStyles(props);

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
    <Button
      key={label}
      to={href}
      component={Link}
      className={styles.menuButton}
    >
      {label}
    </Button>
  ));

  const displayDesktop = () => (
    <Toolbar className={styles.toolbar}>
      <img src={logo} alt="Logo" />
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );

  const getDrawerChoices = () => headersData.map(({ label, href }) => (
    <Link
      key={label}
      component={Link}
      to={href}
      className={styles.mobileMenuButton}
    >
      <MenuItem>{label}</MenuItem>
    </Link>
  ));

  const displayMobile = () => {
    const handleDrawerOpen = () => setView(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setView(prevState => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <img src={logo} alt="Logo" />
        <IconButton
          edge="end"
          arial-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <div className={styles.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={styles.root}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
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

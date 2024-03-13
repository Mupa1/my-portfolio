import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ElevationScroll from '../ElevationScroll';
import { headersData } from '../../data';
import logo from '../../assets/logo2.png';
import useStyles from './Header.styles';
import { IComponentProps } from '../../entities/types';

const Header: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  const [view, setView] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = view;

  useEffect(() => {
    const setResponsiveness = () =>
      window.innerWidth < 900
        ? setView((prevState) => ({ ...prevState, mobileView: true }))
        : setView((prevState) => ({ ...prevState, mobileView: false }));
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const getMenuButtons = () =>
    headersData.map(({ label, href }) => (
      <Link
        key={label}
        to={href}
        className={`${classes.menuButton} ${classes.menuButtonDesktop}`}
      >
        {label}
      </Link>
    ));

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <Link to='/'>
        <img src={logo} alt='Logo' />
      </Link>
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );

  const getDrawerChoices = () =>
    headersData.map(({ label, href }) => (
      <MenuItem key={label} className={classes.munuItem}>
        <Link to={href} className={classes.menuButton}>
          {label}
        </Link>
      </MenuItem>
    ));

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setView((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setView((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div className={classes.logoBox}>
          <Link to='/'>
            <img src={logo} alt='Logo' className={classes.logo} />
          </Link>
          <IconButton
            edge='end'
            arial-label='menu'
            aria-haspopup='true'
            onClick={handleDrawerOpen}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
        </div>
        <Drawer anchor='left' open={drawerOpen} onClose={handleDrawerClose}>
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar className={classes.appBar} sx={{ backgroundColor: 'white' }}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Header;

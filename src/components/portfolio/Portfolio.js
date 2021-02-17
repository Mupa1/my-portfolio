/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'react-external-link';
import { Element } from 'react-scroll';
import {
  Grid, Paper, Typography, ButtonBase, Button,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { useStyles, StyledButton } from './Portfolio.styles';

import tastyRecipes from '../../assets/tastyRecipes.png';

const Portfolio = ({ props }) => {
  const classes = useStyles(props);
  const theme = createMuiTheme({
    palette: {
      action: {
        disabledBackground: '#EBEBFF',
        disabled: '#6070FF',
      },
    },
  });

  return (
    <section>
      <Element id="portfolio" name="portfolio">
        <article className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} src={tastyRecipes} alt="card" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} md={6} container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h4" component="h2" style={{ fontWeight: 'bold', }}>
                      Tasty Recipes
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      A single page application that fetches recipe data from Spoonacular API and stores it in the redux store. Then the UI renders the recipes based on the data in the store.
                    </Typography>
                  </Grid>
                  <Grid item xs spacing={2}>
                    <ThemeProvider theme={theme}>
                      <Button variant="contained" color="primary" disabled className={classes.techStack}>
                        React
                      </Button>
                      <Button variant="contained" color="primary" disabled className={classes.techStack}>
                        Redux
                      </Button>
                      <Button variant="contained" color="primary" disabled className={classes.techStack}>
                        Bootstrap
                      </Button>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs>
                    <ThemeProvider theme={theme}>
                      <ExternalLink href="https://tasty-yummy-recipes-app.netlify.app/">
                        <StyledButton className={classes.techStack}>
                          Live
                        </StyledButton>
                      </ExternalLink>
                      <ExternalLink href="https://github.com/Mupa1/tasty-recipes">
                        <StyledButton className={classes.techStack} h>
                          Source
                        </StyledButton>
                      </ExternalLink>
                    </ThemeProvider>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </article>
      </Element>
    </section>
  );
};

Portfolio.defaultProps = {
  props: () => { },
};

Portfolio.propTypes = {
  props: PropTypes.func,
};

export default Portfolio;

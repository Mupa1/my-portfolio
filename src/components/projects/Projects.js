import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Element } from 'react-scroll';
import { Button } from '@material-ui/core';
import { useStyles } from './Projects.styles';
import projectsData from '../../projectsData';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = ({ props }) => {
  const classes = useStyles(props);

  const getTechStacks = techStack => techStack.map(techs => (
    <Button variant="contained" color="primary" disabled className={classes.techStack} key={uuidv4()}>
      {techs.tech}
    </Button>
  ));

  const getProjectDetails = () => projectsData.map(project => (
    <ProjectCard project={project} techStack={getTechStacks(project.techStack)} key={uuidv4()} />
  ));

  return (
    <section className={classes.root}>
      <Element id="projects" name="projects">
        <>{getProjectDetails()}</>
      </Element>
    </section>
  );
};

Projects.defaultProps = {
  props: () => { },
};

Projects.propTypes = {
  props: PropTypes.func,
};

export default Projects;

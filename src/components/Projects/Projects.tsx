import { v4 as uuidv4 } from 'uuid';
import { Element } from 'react-scroll';
import { Button } from '@mui/material';
import { useStyles } from './Projects.styles';
import { projectsData } from '../../data';
import ProjectCard from '../ProjectCard/ProjectCard';
import { IComponentProps, ITechStack } from '../../entities/types';

const Projects: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  const getTechStacks = (techStack: ITechStack[]) =>
    techStack.map((techs) => (
      <Button disabled className={classes.techStack} key={uuidv4()}>
        {techs.tech}
      </Button>
    ));

  const getProjectDetails = () =>
    projectsData.map((project) => (
      <ProjectCard
        project={project}
        techStack={getTechStacks(project.techStack)}
        key={uuidv4()}
      />
    ));

  return (
    <section className={classes.root}>
      <>{getProjectDetails()}</>
    </section>
  );
};

export default Projects;

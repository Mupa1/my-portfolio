export interface IComponentProps {
  props?: () => {};
}

export interface IServerState {
  submitting: boolean;
  status?: any;
}

export interface ITechs {
  tech: string,
}

export interface ITechStack extends Array<ITechs>{}

export interface IProjectCardProps extends IComponentProps {
  techStack: any;
  project: {
    imageSrc: string;
    title: string;
    description: string;
    live: string;
    github: string;
  };
}

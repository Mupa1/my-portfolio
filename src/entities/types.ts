import { ReactElement } from "react";

export interface IComponentProps {
  props?: () => void;
}

interface IStatus {
  ok: boolean;
  msg: string;
}

export interface IServerState {
  submitting: boolean;
  status?: IStatus | null;
}

export interface ITechStack {
  tech: string,
}

export interface IProjectCardProps extends IComponentProps {
  techStack: Array<ReactElement>;
  project: {
    imageSrc: string;
    title: string;
    description: string;
    live: string;
    github: string;
  };
}

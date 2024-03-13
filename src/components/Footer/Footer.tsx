import React from 'react';
import useStyles from './Footer.styles';
import ContactForm from '../ContactForm/ContactForm';

import { IComponentProps } from '../../entities/types';

const Footer: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <ContactForm />
    </section>
  );
};

export default Footer;

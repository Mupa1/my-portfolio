import React from 'react';
import useStyles from './Footer.styles';
import About from '../About/About';
import ContactForm from '../ContactForm/ContactForm';
import { IComponentProps } from '../../entities/types';

const Footer: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <About />
      <ContactForm />
    </section>
  );
};

export default Footer;

import Portfolio from '../../components/Projects/Projects';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import useStyles from './Home.styles';
import { IComponentProps } from '../../entities/types';

const Home: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <Landing />
      <Portfolio />
      <About />
      <Footer />
    </section>
  );
};

export default Home;

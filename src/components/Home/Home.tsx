import Header from '../Header/Header';
import Portfolio from '../Projects/Projects';
import Landing from '../Landing/Landing';
import useStyles from './Home.styles';
import Footer from '../Footer/Footer';
import { IComponentProps } from '../../entities/types';

const Home: React.FC = ({ props }: IComponentProps) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <Header />
      <Landing />
      <Portfolio />
      <Footer />
    </section>
  );
};

export default Home;

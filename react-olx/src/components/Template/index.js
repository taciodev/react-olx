import { Container } from './styled';
import { Main } from './styled';
import { Header } from '../partials/Header';
import { Footer } from '../partials/Footer';

const Template = (props) => {
  return (
    <Container>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Container>
  );
}

export default Template;
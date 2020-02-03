// PACKAGES
import styled from 'styled-components';

// LOCAL
import Nav from '../src/components/Nav/index.js'
import Home from '../src/components/Home'

class HomePage extends React.Component {
  render() {
    return (
      <Main1 className="HomePage">
        <Nav />
        <Home />
      </Main1>
    );
  }
}

const Main1 = styled.main`
`;

export default HomePage;

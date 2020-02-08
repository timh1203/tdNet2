// PACKAGES
import styled from 'styled-components';

// LOCAL
import Wrapper from '../src/components/libs/Wrapper'
import Home from '../src/components/Home'

class HomePage extends React.Component {
  render() {
    return (
      <Wrapper1>
        <Home />
      </Wrapper1>
    );
  }
}

const Wrapper1 = styled(Wrapper)`
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
`;

export default HomePage;

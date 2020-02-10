// PACKAGES
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch'

// LOCAL
import Wrapper from '../src/components/libs/Wrapper'
import Home from '../src/components/Home'

class HomePage extends React.Component {
  static async getInitialProps() {
    const api_key = process.env.YOUTUBE_API_KEY
    const channel_id = process.env.YOUTUBE_CHANNEL_ID
    const selfURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=3&order=date&key=${api_key}`

    const res = await fetch(selfURL)
    const json = await res.json()
    return { ytResults: json.items }
  }

  render() {
    return (
      <Wrapper1>
        <Home ytResults={this.props.ytResults} />
      </Wrapper1>
    );
  }
}

const Wrapper1 = styled(Wrapper)`
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
`;

export default HomePage;

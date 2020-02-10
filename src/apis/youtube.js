// PACKAGES
import styled from 'styled-components'

class Youtube extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.clicked()
  }

  clicked = () => {
    const api_key = process.env.YOUTUBE_API_KEY
    const channel_id = process.env.YOUTUBE_CHANNEL_ID
    const selfURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=3&order=date&key=${api_key}`

    fetch(selfURL)
      .then(res => res.json())
      .then(res => {
        const results = res.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId)
        this.setState({ results });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <Main1 className="Feed-youtube">
        {
          this.state.results.map((link, i) => (
            <div key={i} >
              <iframe
                width="400"
                height="225"
                src={link}
                title="video"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div>
          ))
        }
      </Main1>
    );
  }
}

const Main1 = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`

export default Youtube;

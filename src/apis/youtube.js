class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultYoutube: []
    };
  }

  componentDidMount() {
    this.clicked()
  }

  clicked = () => {
    const api_key = process.env.YOUTUBE_API_KEY
    const channel_id = process.env.YOUTUBE_CHANNEL_ID
    const selfURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=3&order=date&key=${api_key}`

    fetch(selfURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const resultYoutube = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId)
        this.setState({ resultYoutube });
      })
      .catch((error) => {
        console.log(error);
      })

  }

  render() {
    return (
      <div className="Feed-youtube">
        {
          this.state.resultYoutube.map((link, i) => (
            <div key={i} className="videoThumb">
              <iframe
                width="560"
                height="315"
                src={link}
                title="video"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Youtube;

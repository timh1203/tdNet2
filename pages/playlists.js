// LOCAL
import Nav from '../src/components/Nav'
import Playlists from '../src/components/Playlists'

class PlaylistsPage extends React.Component {
  render() {
    return (
      <main className="PlaylistsPage">
        <Nav />
        <Playlists />
      </main>
    )
  }
}

export default PlaylistsPage;

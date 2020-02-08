// LOCAL
import Announcements from './Announcements.js'
import Contact from './Contact.js'
import Discord from './Discord.js'
import Feed from './Feed.js'
import Header from './Header.js'

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Announcements />
        <Feed />
        <Discord />
        <Contact />
      </main>
    )
  }
}

export default Home;

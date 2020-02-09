// LOCAL
import Header from './Header.js'
import Announcements from './Announcements.js'
import Quote from './Quote.js'
import Feed from './Feed.js'
import Discord from './Discord.js'
import Contact from './Contact.js'

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Announcements />
        <Quote />
        <Feed />
        <Discord />
        <Contact />
      </main>
    )
  }
}

export default Home;

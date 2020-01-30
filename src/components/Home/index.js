// LOCAL
import Announcements from './Announcements.js'
import Contact from './Contact.js'
import Discord from './Discord.js'
import Feed from './Feed.js'
import Footer from './Footer.js'
import Header from './Header.js'
import Nav from './Nav.js'

class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <Nav />
        <Header />
        <Announcements />
        <Feed />
        <Discord />
        <Contact />
        <Footer />
      </main>
    )
  }
}

export default Home;

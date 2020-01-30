// LOCAL
import { Announcements, Contact, Discord, Header, Feed, Footer, Nav } from '../src'

class Index extends React.Component {
  render() {
    return (
      <main className="Index">
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

export default Index;

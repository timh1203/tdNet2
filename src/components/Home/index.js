// LOCAL
import Announcements from './Announcements.js'
import Header from './Header.js'
import Quote from './Quote.js'
import Feed from './Feed.js'
import Discord from './Discord.js'
import ContactForm from '../libs/ContactForm'

class Home extends React.Component {
  render() {
    return (
      <main>
        <Announcements />
        <Header />
        <Quote />
        {this.props.ytResults ? <Feed ytResults={this.props.ytResults} /> : ""}
        <Discord />
        <ContactForm />
      </main>
    )
  }
}

export default Home;

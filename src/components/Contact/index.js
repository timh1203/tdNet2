// LOCAL
import ContactForm from '../libs/ContactForm'
import Discord from './Discord.js'

class Contact extends React.Component {
  render() {
    return (
      <main>
        <ContactForm />
        <Discord />
      </main>
    )
  }
}

export default Contact;

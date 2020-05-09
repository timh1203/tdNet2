// LOCAL
import ContactForm from '../../shared/ContactForm'
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

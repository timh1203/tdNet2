// LOCAL
import FormHook from '../libs/FormHook'

const Contact = () => {
  const [info, setInfo] = FormHook({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  return (
    <section>
      <form action="https://formspree.io/timh1203@gmail.com" method="POST">
        <div className="form-group">
          <label htmlFor="from"></label>
          <input
            id="from"
            name="from"
            type="hidden"
            value="traveldev.net"
            hidden />
        </div>
        <div className="form-group">
          <label htmlFor="_gotcha"></label>
          <input
            id="_gotcha"
            name="_gotcha"
            type="hidden" />
        </div>
        <div className="form-group">
          <label htmlFor="firstName"></label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={info.firstName}
            onChange={setInfo}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"></label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={info.lastName}
            onChange={setInfo}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={info.email}
            onChange={setInfo}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Message"
            value={info.message}
            onChange={setInfo}
            required />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact

const Contact = () => (
  <section>
    <form>
      <div className="form-group">
        <label htmlFor="from"></label>
        <input name="from" type="text" value="traveldev.net" hidden />
      </div>
      <div className="form-group">
        <label htmlFor="firstName"></label>
        <input name="firstName" type="text" placeholder="First Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName"></label>
        <input name="lastName" type="text" placeholder="Last Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="Email"></label>
        <input name="Email" type="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <label htmlFor="body"></label>
        <textarea name="body" type="text" placeholder="Message" required />
      </div>
      <button type="submit">Send</button>
    </form>
  </section>
)

export default Contact

// PACKAGE
import styled from 'styled-components'

// LOCAL
import FormHook from '../FormHook'

const ContactForm = () => {
  const [info, setInfo] = FormHook({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  return (
    <Section1>
      <Div1>
        <h1>📫 Contact</h1>
      </Div1>
      <Div2>
        <Form1 action="https://formspree.io/timh1203@gmail.com" method="POST">
          <Div3 className="form-group">
            <label htmlFor="from"></label>
            <input
              id="from"
              name="from"
              type="hidden"
              value="traveldev.net"
              hidden />
          </Div3>
          <Div3 className="form-group">
            <label htmlFor="_gotcha"></label>
            <input
              id="_gotcha"
              name="_gotcha"
              type="hidden" />
          </Div3>
          <Div3 className="form-group">
            <label htmlFor="firstName"></label>
            <Input1
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={info.firstName}
              onChange={setInfo}
              required />
          </Div3>
          <Div3 className="form-group">
            <label htmlFor="lastName"></label>
            <Input1
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={info.lastName}
              onChange={setInfo}
              required />
          </Div3>
          <Div3 className="form-group">
            <label htmlFor="email"></label>
            <Input1
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={info.email}
              onChange={setInfo}
              required />
          </Div3>
          <Div3 className="form-group">
            <label htmlFor="message"></label>
            <Textarea1
              id="message"
              name="message"
              type="text"
              placeholder="Message"
              value={info.message}
              onChange={setInfo}
              required />
          </Div3>
          <Div4>
            <Button1 type="submit">Send</Button1>
          </Div4>
        </Form1>
      </Div2>
    </Section1>
  )
}

const Section1 = styled.section`
  padding: 2rem 0;
  background: rgb(128,128,233);
  background: linear-gradient(0deg, rgba(128,128,233,1) 0%, rgba(73,127,255,1) 100%);
`
const Div1 = styled.div`
  text-align: center;
`
const Form1 = styled.form`
`
const Div2 = styled.div`
  width: 50%;
  margin: 0 auto;
`
const Div3 = styled.div`
  margin: 1rem 0;
`
const Input1 = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  margin: 10px;
  border-radius: 3px;
  transition: ease all 0.2s;
  &:focus {
    outline: none;
    border: 1px solid #555bfb;
    box-shadow: 0 0 20px white;
  }
`
const Textarea1 = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 1.2rem;
  margin: 10px;
  border-radius: 3px;
  transition: ease all 0.2s;
  &:focus {
    outline: none;
    border: 1px solid #555bfb;
    box-shadow: 0 0 20px white;
  }
`
const Div4 = styled.div`
  text-align: right;
`
const Button1 = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  color: white;
  padding: 5px;
  width: 100px;
  background: #555bfb;
  transition: ease all 0.5s;
  font-size: 1rem;
  &:hover {
    background: white;
    color: #555bfb;
    border: 2px solid black;
    box-shadow: 0 0 20px white;
  }
`

export default ContactForm

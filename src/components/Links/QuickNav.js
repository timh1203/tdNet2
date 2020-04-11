// PACKAGES
import styled from 'styled-components';

export default function QuickNav() {
  return (
    <Div1>
      <a href="#links-travel">
        <P1>Travel</P1>
      </a>
      <a href="#links-phone">
        <P1>Phone</P1>
      </a>
      <a href="#links-services">
        <P1>Services</P1>
      </a>
      <a href="#links-web">
        <P1>Web</P1>
      </a>
    </Div1>
  )
}

const Div1 = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`
const P1 = styled.p`
  font-size: 1.6rem;
`

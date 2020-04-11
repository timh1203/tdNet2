// PACKAGES
import styled from 'styled-components';

export default function QuickNav() {
  return (
    <Div1>
      <A1 href="#links-travel">
        <P1>Travel</P1>
      </A1>
      <A1 href="#links-phone">
        <P1>Phone</P1>
      </A1>
      <A1 href="#links-services">
        <P1>Services</P1>
      </A1>
      <A1 href="#links-web">
        <P1>Web</P1>
      </A1>
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
const A1 = styled.a`
  text-decoration: none;
  margin-bottom: 5px;
  &:visited {
    color: gray;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-shadow: 0 0 20px #5454FF;
  }
`
const P1 = styled.p`
  font-size: 1.4rem;
`

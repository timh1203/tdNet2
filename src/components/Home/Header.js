// PACKAGES
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Header = () => (
  <Section1>
    <H1A>travelDev</H1A>
    <ReactPlayer1
      url="https://youtu.be/EBjhGtDrEHk"
    />
    <P1>I love to ️✈️, 💻, and 📹.</P1>
  </Section1>
)

const Section1 = styled.section`
  text-align: center;
`
const H1A = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-weight: 800;
  color: #292929;
  text-shadow: 1px 4px 2px gray;
  margin: 0;
  font-size: 4rem;
  text-decoration: underline;
  transform: rotate(-10deg);
`
const ReactPlayer1 = styled(ReactPlayer)`
  margin: 2rem auto;
  border: 2px solid #555BFB;
  border-radius: 3px;
`
const P1 = styled.p`
  font-size: 1.5rem;
`

export default Header

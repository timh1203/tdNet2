// PACKAGES
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Header = () => (
  <Main1 className="Header">
    <H1A>travelDev</H1A>
    <ReactPlayer1
      url="https://youtu.be/EBjhGtDrEHk"
    />
    <P1>I love to ️✈️, 💻, and 📹.</P1>
  </Main1>
)

const Main1 = styled.main`
  text-align: center;
`
const H1A = styled.h1`

  font-weight: 800;
  color: #292929;
  text-shadow: 1px 4px 2px gray;
  margin: 0;
  font-size: 6rem;
`
const ReactPlayer1 = styled(ReactPlayer)`
  margin: 2rem auto;
`
const P1 = styled.p`
  font-size: 1.5rem;
`

export default Header

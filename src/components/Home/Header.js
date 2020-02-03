// PACKAGES
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Header = () => (
  <main className="Header">
    <ReactPlayer1
      url="https://youtu.be/EBjhGtDrEHk"
    />
  </main>
)

const ReactPlayer1 = styled(ReactPlayer)`
  margin: 0 auto;
`

export default Header

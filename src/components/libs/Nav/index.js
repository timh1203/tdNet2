// PACKAGES
import styled from 'styled-components'

// LOCAL
import Social from '../Social'
import Menu from '../Menu'

const Nav = () => (
  <Main1 id="nav">
    <Section1 className="nav-left">
      <img src="/logo.png" alt='travelDev Logo' />
    </Section1>
    <Section2 className="nav-middle">
      <Social />
    </Section2>
    <Section3 className="nav-right">
      <Menu />
    </Section3>
  </Main1>
)

const Main1 = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`
const Section1 = styled.section`
  width: 10%;
`
const Section2 = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
`
const Section3 = styled.section`
  display: flex;
  justify-content: space-around;
  width: 60%;
  font-size: 1.5rem;
`

export default Nav

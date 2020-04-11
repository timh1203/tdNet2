// PACKAGES
import styled from 'styled-components'

const Header = () => (
  <Section1>
    <H1A>travelDev</H1A>
    <Iframe1 width="640" height="385" src="https://www.youtube.com/embed/EBjhGtDrEHk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe1>
    <P1>I love to ️travel, code, and make videos.</P1>
  </Section1>
)

const Section1 = styled.section`
  padding: 2rem;
  text-align: center;
  background: rgb(128,128,233);
  background: linear-gradient(0deg, rgba(128,128,233,1) 0%, rgba(73,127,255,1) 100%);
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
const Iframe1 = styled.iframe`
  margin: 2rem auto;
  border: none;
`
const P1 = styled.p`
  font-size: 1.5rem;
`

export default Header

// PACKAGES
import styled from 'styled-components'

const Discord = () => (
  <section>
    <h1>Discord</h1>
    <Div1>
      <P1>Want to connect with me and other aspiring travel developers?</P1>
      <P2>Hop in our discord: DevSky Crew!</P2>
      <A1 href="https://discord.gg/9WjKnh" target="_blank">https://discord.gg/9WjKnh</A1>
    </Div1>
  </section>
)

const Div1 = styled.div`
  text-align: center;
`
const P1 = styled.p`
  font-family: 'Abril Fatface', cursive;
  font-weight: 800;
  font-size: 1.5rem;
`
const P2 = styled.p`
  font-size: 1.2rem;
`
const A1 = styled.a``

export default Discord

// PACKAGES
import styled from 'styled-components'

const Discord = () => (
  <Section1>
    <A1 href="https://discord.gg/9WjKnh" target="_blank">
      <Img1 src="/discord.png" alt="discord logo" />
    </A1>
    <P1>Want to connect with me and other aspiring travel developers?</P1>
    <p>Hop in our discord: DevSky Crew!</p>
    <A1 href="https://discord.gg/9WjKnh" target="_blank">https://discord.gg/9WjKnh</A1>
    {/* </Div1> */}
  </Section1>
)

const Section1 = styled.section`
  padding: 2rem 0;
  height: 400px;
  background-image: url("/skyDrawing.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #8C9EFF;
  text-align: center;
  font-size: 1.5rem;
`
const Img1 = styled.img`
  width: 150px;
`
const P1 = styled.p`
  font-weight: 800;
`
const A1 = styled.a`
  color: #8C9EFF;
`

export default Discord

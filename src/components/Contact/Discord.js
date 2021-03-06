// PACKAGES
import styled from 'styled-components'

const Discord = () => (
  <Section1>
    <Div1>
      <h1>Want to hang with a small group of developers who like to travel?</h1>
      <Iframe1 width="640" height="385" src="https://www.youtube.com/embed/S9CaB83z6z8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe1>
      <P1>
        As part of my initiative for 2020 to connect with more people, I decided to start a Discord server as a place for like-minded people to meet and hang. Though the main foci remain web development and travel, the inclusion of other topics is always welcome. In the video, I introduce you to the general, music, and voice channels. We have a bot that plays music for you which I thought is pretty cool! I also encourage everyone to be friendly and connect with other people in the channel. People are pretty cool so they are worth getting to know. If you have any features that you are curious about adding, speak to one of our "janitors". I hope to see you in the channel even if you just want to come say hi.
        </P1>
      <p>
        DevSky Crew Discord Invite:
        </p>
      <A1 href="https://discord.gg/9WjKnh" target="_blank">
        <Img1 src="/static/images/discord.png" alt="discord logo" />
      </A1>
      <A1 href="https://discord.gg/9WjKnh" target="_blank">
        <p>https://discord.gg/9WjKnh</p>
      </A1>
    </Div1>
  </Section1>
)

const Section1 = styled.section`
  padding: 2rem 0;
  background-image: url("/static/images/skyDrawing.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  font-size: 1.5rem;
`
const Div1 = styled.div`
  width: 50%;
  margin: 0 auto;
`
const Iframe1 = styled.iframe`
  margin: 2rem auto;
  border: none;
`
const P1 = styled.p`
  font-size: 1.2rem;
`
const Img1 = styled.img`
  width: 150px;
`
const A1 = styled.a`
  color: white;
`

export default Discord

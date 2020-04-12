// PACKAGES
import styled from 'styled-components'

// LOCAL
import Social from '../Social'
import Menu from '../Menu'

const About = () => {
  return (
    <Div1>
      <P1>About</P1>
      <P2>My personal website to share my journey in travel and web development. I love traveling, web development, and sharing outdoor adventures. This site is meant to inspire and help me connect with like minded individual and serve as an online presence for my personal hobbies.</P2>
      <Button1>Read More</Button1>
    </Div1>
  )
}

const Credits = () => {
  return (
    <Div1>
      <P1>Made with ☀️, 🍵, and 🔥.</P1>
      <p>Updated: February {new Date().getFullYear()}</p>
    </Div1>
  )
}

const Footer = () => (
  <Main1>
    <Section1>
      <About />
    </Section1>
    <Section2>
      <P1>Navigation</P1>
      <Span1>
        <Menu />
      </Span1>
    </Section2>
    <Section3>
      <P1>Socials</P1>
      <Div2>
        <Social />
      </Div2>
      <Credits />
    </Section3>
  </Main1>
)

const Main1 = styled.main`
  height: 285px;
  display: flex;
  justify-content: space-around;
  background: #333333;
`
const Section1 = styled.section`
  width: 50%;
  text-align: center;
  color: white;
`
const Div1 = styled.div`
  width: 80%;
  margin: 0 auto;
  font-family: 'Raleway', sans-serif;
`
const P1 = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
`
const P2 = styled.p`
  font-size: 1.2rem;
  font-family: 'Raleway', sans-serif;
`
const Button1 = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  color: white;
  padding: 5px;
  width: 100px;
  background: #555bfb;
  transition: ease all 0.5s;
  font-size: 1rem;
  &:hover {
    background: white;
    color: #555bfb;
    border: 2px solid black;
    box-shadow: 0 0 20px white;
  }
`
const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15%;
  font-size: 1.2rem;
`
const Span1 = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  * {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-shadow: 0 0 20px white;
    }
  }
`
const Section3 = styled.section`
  width: 35%;
  text-align: center;
  color: white;
`
const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default Footer

// PACKAGES
import styled from 'styled-components'

// LOCAL
import Social from '../Social'
import Menu from '../Menu'

const About = () => {
  return (
    <Div1>
      <P1>About</P1>
      <p>My personal website to share my journey in travel and web development. I love traveling, web development, and sharing outdoor adventures. This site is meant to inspire and help me connect with like minded individual and serve as an online presence for my personal hobbies.</p>
      <button>Read More</button>
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
      <Menu />
    </Section2>
    <Section3>
      <P1>Social</P1>
      <Div2>
        <Social />
      </Div2>
      <Credits />
    </Section3>
  </Main1>
)

const Main1 = styled.main`
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
`
const P1 = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
`
const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10%;
  font-size: 1.3rem;
  color: white;
  `
const Section3 = styled.section`
  width: 40%;
  text-align: center;
  color: white;
`
const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default Footer

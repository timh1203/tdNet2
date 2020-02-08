// LOCAL
import Social from '../Social'
import Menu from '../Menu'

const About = () => {
  return (
    <>
      <p>About</p>
      <p>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</p>
      <button>Read More</button>
    </>
  )
}

const Footer = () => (
  <main className="Footer">
    <About />
    <Social />
    <Menu />
  </main>
)

export default Footer

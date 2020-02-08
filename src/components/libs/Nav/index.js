// PACKAGES
import Link from 'next/link'
import styled from 'styled-components'

// LOCAL
import Social from '../Social'

const Nav = () => (
  <Main1 className="Nav">
    <Section1 className="nav-left">
      <img src="/logo.png" alt='travelDev Logo' />
    </Section1>
    <Section2 className="nav-middle">
      <Social />
    </Section2>
    <Section3 className="nav-right">
      <Link href="/">
        <A1>🏠 Home</A1>
      </Link>
      <Link href="/about">
        <A1>👤 About</A1>
      </Link>
      <Link href="/playlists">
        <A1>⏯ Playlists</A1>
      </Link>
      <Link href="/discord">
        <A1>🎙 Discord</A1>
      </Link>
      <Link href="/blog">
        <A1>📘 Blog</A1>
      </Link>
      <Link href="/resources">
        <A1>⚡️ Resources</A1>
      </Link>
    </Section3>
  </Main1>
)

const Main1 = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const A1 = styled.a`
  text-decoration: none;
  &:visited {
    color: #5454FF;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-shadow: 0 0 20px #5454FF;
  }
`

export default Nav

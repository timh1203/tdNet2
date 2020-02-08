// PACKAGES
import Link from 'next/link'
import styled from 'styled-components'
import { FaTwitterSquare, FaYoutubeSquare, FaInstagram } from 'react-icons/fa'

// LOCAL
import { links } from '../../../../public'

const Nav = () => (
  <Main1 className="Nav">
    <Section1 className="nav-left">
      <img src="/logo.png" alt='travelDev Logo' />
    </Section1>
    <Section2 className="nav-middle">
      <a href={links.youtube.url} alt={links.youtube.alt} target="_blank">
        <FaYoutubeSquare1 size={50} />
      </a>
      <a href={links.twitter.url} alt={links.twitter.alt} target="_blank">
        <FaTwitter1 size={50} />
      </a>
      <a href={links.instagram.url} alt={links.instagram.alt} target="_blank">
        <FaInstagram1 size={43} />
      </a>
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
const FaYoutubeSquare1 = styled(FaYoutubeSquare)`
  color: #FF0000;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`
const FaTwitter1 = styled(FaTwitterSquare)`
  color: #0077B5;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`
const FaInstagram1 = styled(FaInstagram)`
  color: white;
  border-radius: 10%;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`

export default Nav

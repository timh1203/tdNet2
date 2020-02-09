// PACKAGES
import Link from 'next/link'
import styled from 'styled-components'

const Social = () => (
  <>
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
  </>
)

const A1 = styled.a`
  text-decoration: none;
  margin-bottom: 5px;
  &:visited {
    color: #5454FF;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-shadow: 0 0 20px #5454FF;
  }
`

export default Social

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
    <Link href="/gear">
      <A1>⚙️ Gear</A1>
    </Link>
    <Link href="/resources">
      <A1>⚡️ Links</A1>
    </Link>
    <Link href="/contact">
      <A1>✉️ Contact</A1>
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

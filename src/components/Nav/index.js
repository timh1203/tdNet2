import Link from 'next/link'

const Nav = () => (
  <main className="Nav">
    <div className="nav-left">
      <img src="/logo.png" alt='travelDev Logo' />
    </div>
    <div className="nav-right">
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/playlists"><a>Playlists</a></Link>
      <Link href="/discord"><a>Discord</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/resources"><a>Resources</a></Link>
    </div>
  </main>
)

export default Nav

// PACKAGES
import styled from 'styled-components'

// LOCAL
import { playlists } from '../../../public/static'

const createPlaylistItem = (item, index) => (
  <article key={index}>
    <A1 href={item.href} rel="noopener noreferrer" target="_blank">
      <Img1 src={item.src} alt={item.alt} />
    </A1>
  </article>
)

class Playlists extends React.Component {
  render() {
    return (
      <Main1>
        <Div1>
          {playlists.map((item, index) => createPlaylistItem(item, index))}
        </Div1>
      </Main1>
    )
  }
}

const Main1 = styled.main`
  width: 90%;
  margin: 0 auto;
`
const Div1 = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
`
const Img1 = styled.img`
  max-height: 200px;
  margin: 1rem;
  &:hover {
    transition: 2s ease-out;
    transform: scale(1.1);
  }
`
const A1 = styled.a`
`

export default Playlists;

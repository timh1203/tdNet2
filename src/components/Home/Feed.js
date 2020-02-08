// PACKAGES
import styled from 'styled-components'

// LOCAL
import Youtube from '../../apis/youtube.js'

const Feed = () => (
  <main className="Feed">
    <h1>Latest Videos</h1>
    <Youtube />
    <Div1>
      <a href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
        <button>More Videos</button>
      </a>
    </Div1>
  </main>
)

const Div1 = styled.div`
  text-align: center;
`

export default Feed

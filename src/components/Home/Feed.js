// PACKAGES
import styled from 'styled-components'

const Feed = (props) => (
  <Section1>
    <h1>📹 Latest Videos</h1>
    <Div1>
      {
        props.ytResults.map((video, i) => (
          <div key={i} >
            <iframe
              width="400"
              height="225"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title="video"
              frameBorder="0"
              allowFullScreen>
            </iframe>
            <Div2>
              <A1 href={`https://www.youtube.com/embed/${video.id.videoId}`} target="_blank">
                <P1>{video.snippet.title}</P1>
              </A1>
              <P2>{video.snippet.description.substr(0, 300)}</P2>
            </Div2>
          </div>
        ))
      }
    </Div1>
    <Div3>
      <a href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
        <Button1>More Videos</Button1>
      </a>
    </Div3>
  </Section1>
)

const Section1 = styled.section`
  padding: 2rem 0;
  height: 500px;
  text-align: center;
  background: rgb(128,128,233);
  background: linear-gradient(0deg, rgba(128,128,233,1) 0%, rgba(73,127,255,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Div1 = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const Div2 = styled.div`
  width: 100%;
`
const A1 = styled.a`
  color: white;
`
const P1 = styled.p`
  font-weight: 800;
  text-decoration: underline;
`
const P2 = styled.p`
`
const Div3 = styled.div`
  text-align: center;
  margin: 2rem 0;
`
const Button1 = styled.button`
  border: 2px solid black;
  border-radius: 3px;
  color: white;
  padding: 10px;
  width: 120px;
  background: #555bfb;
  transition: ease all 0.5s;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    background: white;
    color: #555bfb;
    border: 2px solid black;
    box-shadow: 0 0 20px #5454FF;
  }
`

export default Feed

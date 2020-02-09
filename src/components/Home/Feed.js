// PACKAGES
import styled from 'styled-components'

// LOCAL
import Youtube from '../../apis/youtube.js'

const Feed = () => (
  <Section1>
    <h1>📹 Latest Videos</h1>
    <Youtube />
    <Div1>
      <a href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
        <Button1>More Videos</Button1>
      </a>
    </Div1>
  </Section1>
)

const Section1 = styled.section`
  padding: 2rem 0;
  text-align: center;
  background: rgb(128,128,233);
  background: linear-gradient(0deg, rgba(128,128,233,1) 0%, rgba(73,127,255,1) 100%);

`
const Div1 = styled.div`
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

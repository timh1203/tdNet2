// PACKAGES
import styled from 'styled-components';

const Quote = () => (
  <Section1>
    <h1>
      <Span1>❝</Span1>
      <Span2>
        A mind that is stretched by a new experience can never go back to its old dimensions.
      </Span2>
      <Span1>❞</Span1>
    </h1>
  </Section1>
)

const Section1 = styled.section`
  padding: 2rem 0;
  height: 400px;
  color: white;
  background-image: url("/static/images/skyPlane.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`
const Span2 = styled.span`
  font-family: cursive;
  border-bottom: 5px solid #5454FF;
`
const Span1 = styled.span`
  font-size: 4rem;
  color: #5454FF;
`

export default Quote

// PACKAGES
import styled from 'styled-components';

export default function QuickNav() {
  return (
    <Div1>
      <A1 href="#gear-laptop">
        <P1>Laptop Computer</P1>
      </A1>
      <A1 href="#gear-desktop">
        <P1>Desktop Computer</P1>
      </A1>
    </Div1>
  )
}

const Div1 = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`
const A1 = styled.a`
  text-decoration: none;
  margin-bottom: 5px;
  &:link,
  &:visited {
    color: gray;
  }
  &:hover {
    cursor: pointer;
    color: gray;
  }
`
const P1 = styled.p`
  font-family: "Jost";
  font-size: 1.4rem;
  border-bottom: 3px solid white;
  &:hover {
    border-bottom: 3px solid gray;
  }
`

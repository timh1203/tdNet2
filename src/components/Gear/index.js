// PACKAGES
import styled from 'styled-components';
import { FiArrowUpCircle } from "react-icons/fi";

// LOCAL
import { rig, gear } from '../../assets'
import QuickNav from './QuickNav';

class Gear extends React.Component {
  render() {
    return (
      <main>
        <Hr1 />
        <QuickNav />
        <Hr1 />
        <Div1>
          <H1a id="gear-laptop">Laptop Computer</H1a>
        </Div1>
        <Div2>
          <Img2 src={rig.laptop_front.img} alt={rig.laptop_front.alt} />
          <Img2 src={rig.laptop_side.img} alt={rig.laptop_side.alt} />
        </Div2>
        <Div3>
          {gear.laptop.map(item => (
            <Div4 key={item.name}>
              <P1>
                <center><strong>{item.title}</strong></center><br />
              </P1>
              <A2 href={item.link} alt={item.name}>
                <Img1 src={item.img} />
              </A2>
              <P1>
                <center><A2 href={item.link} alt={item.name}>{item.name}</A2></center><br />
                {item.desc}<br />
              </P1>
              <P1><center>{item.weight}</center></P1>
            </Div4>
          ))}
        </Div3>
        <Div1>
          <H1a id="gear-desktop">Desktop Computer</H1a>
          <A1 href="#nav"><FiArrowUpCircle size={50} /></A1>
        </Div1>
        <Div2>
          <Img2 src={rig.desktop_front.img} alt={rig.desktop_front.alt} />
          <Img2 src={rig.desktop_side.img} alt={rig.desktop_side.alt} />
        </Div2>
        <Div5>
          {gear.desktop.map(item => (
            <Div4 key={item.name}>
              <P1>
                <center><strong>{item.title}</strong></center><br />
              </P1>
              <A2 href={item.link} alt={item.name}>
                <Img1 src={item.img} />
              </A2>
              <P1>
                <center><A2 href={item.link} alt={item.name}>{item.name}</A2></center><br />
                {item.desc}
              </P1>
            </Div4>
          ))}
        </Div5>
      </main>
    )
  }
}

const H1a = styled.h1`
  margin-left: 2rem;
`
const Hr1 = styled.hr`
  width: 90%;
`
const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
`
const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;

  & > * {
    margin: 20px;
  }
`
const Div3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`
const Div4 = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
`
const Div5 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Img1 = styled.img`
  width: 90%;
  max-height: 500px;
  display: inline-block;
`
const Img2 = styled.img`
  width: 100%;
  border-radius: 3px;
`
const P1 = styled.p`
  width: 90%;
  line-height: 1.3;
`
const A1 = styled.a`
  text-decoration: none;
  margin-top: 5px;
  &:link,
  &:visited {
    color: darkgray;
  }
  &:hover {
    cursor: pointer;
    color: gray;
  }
`
const A2 = styled.a`
  color: black;
  &hover{
    cursor: pointer;
  }
`
export default Gear;

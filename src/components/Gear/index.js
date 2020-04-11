// PACKAGES
import styled from 'styled-components'

// LOCAL
import { rig, gear } from '../../assets'

class Gear extends React.Component {
  render() {
    return (
      <main>
        <H1a>Laptop Computer</H1a>
        <Div1>
          <Img2 src={rig.laptop_front.img} alt={rig.laptop_front.alt} />
          <Img2 src={rig.laptop_side.img} alt={rig.laptop_side.alt} />
        </Div1>
        <Div2>
          {gear.laptop.map(item => (
            <Div3 key={item.name}>
              <P1>
                <center><strong>{item.title}</strong></center><br />
              </P1>
              <A1 href={item.link} alt={item.name}>
                <Img1 src={item.img} />
              </A1>
              <P1>
                <center><A1 href={item.link} alt={item.name}>{item.name}</A1></center><br />
                {item.desc}<br />
              </P1>
              <P1><center>{item.weight}</center></P1>
            </Div3>
          ))}
        </Div2>
        <H1a>Desktop Computer</H1a>
        <Div1>
          <Img2 src={rig.desktop_front.img} alt={rig.desktop_front.alt} />
          <Img2 src={rig.desktop_side.img} alt={rig.desktop_side.alt} />
        </Div1>
        <Div4>
          {gear.desktop.map(item => (
            <Div3 key={item.name}>
              <P1>
                <center><strong>{item.title}</strong></center><br />
              </P1>
              <A1 href={item.link} alt={item.name}>
                <Img1 src={item.img} />
              </A1>
              <P1>
                <center><A1 href={item.link} alt={item.name}>{item.name}</A1></center><br />
                {item.desc}
              </P1>
            </Div3>
          ))}
        </Div4>
      </main>
    )
  }
}

const H1a = styled.h1`
  margin-left: 2rem;
`
const Div1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;

  & > * {
    margin: 20px;
  }
`
const Div2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`
const Div3 = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
`
const Div4 = styled.div`
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
  line-height: 1.4;
`
const A1 = styled.a`
  color: black;
  &hover{
    cursor: pointer;
  }
`
export default Gear;

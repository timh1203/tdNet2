// PACKAGES
import styled from 'styled-components'

// LOCAL
import { resources } from '../../assets'

class Gear extends React.Component {
  render() {
    return (
      <main className="Gear">
        <h1>Laptop Computer</h1>
        <Div1>
          {resources.laptop.map(item => (
            <Div2>
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
            </Div2>
          ))}
        </Div1>
        <h1>Desktop Computer</h1>
        <Div3>
          {resources.desktop.map(item => (
            <Div2>
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
            </Div2>
          ))}
        </Div3>
      </main>
    )
  }
}

const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Div2 = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem 0;
`
const Div3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Img1 = styled.img`
  width: 90%;
  max-height: 500px;
  display: inline-block;
`
const P1 = styled.p`
  width: 90%;
`
const A1 = styled.a`
  color: black;
  &hover{
    cursor: pointer;
  }
`
export default Gear;

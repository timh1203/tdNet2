// PACKAGES
import styled from 'styled-components'

// LOCAL
import { gear } from '../../assets'

class Gear extends React.Component {
  render() {
    return (
      <main>
        <H1a>Laptop Computer</H1a>
        <Div1>
          {gear.laptop.map(item => (
            <Div2 key={item.name}>
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
            </Div2>
          ))}
        </Div1>
        <H1a>Desktop Computer</H1a>
        <Div4>
          <Img2 src="https://i.imgur.com/KywpOkb.jpg" alt="Desktop setup" />
        </Div4>
        <Div3>
          {gear.desktop.map(item => (
            <Div2 key={item.name}>
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

const H1a = styled.h1`
  margin-left: 2rem;
`
const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`
const Div2 = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
`
const Div3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Div4 = styled.div`
  width: 50%;
  margin: 0 auto;
`
const Img1 = styled.img`
  width: 90%;
  max-height: 500px;
  display: inline-block;
`
const Img2 = styled.img`
  width: 100%;
  border-radius: 3px;
  /* text-align: center; */
  /* margin: 0 auto; */
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

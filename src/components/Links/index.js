// PACKAGES
import styled from 'styled-components';
// LOCAL
import { links } from '../../assets';
import QuickNav from './QuickNav';

class Links extends React.Component {
  makeEntry = (item) => {
    const { name, title, img, affiliate, link, desc, weight } = item;
    return (
      <Div2 key={name}>
        <P1>
          <center><strong>{title}</strong></center><br />
        </P1>
        <A1 href={affiliate || link} alt={name}>
          <center><Img1 src={img} /></center>
        </A1>
        <P1>
          <center><A1 href={affiliate || link} alt={name}>{name}</A1></center><br />
          {desc}<br />
        </P1>
        <P1><center>{weight}</center></P1>
      </Div2>
    )
  }

  render() {
    return (
      <main>
        <QuickNav />
        <Hr1 />
        <H1a id="links-travel">Travel Tools</H1a>
        <Div1>
          {links.travel.map(item => this.makeEntry(item))}
        </Div1>
        <H1a id="links-phone">Phone Tools</H1a>
        <Div1>
          {links.phone.map(item => this.makeEntry(item))}
        </Div1>
        <H1a id="links-services">Services</H1a>
        <Div1>
          {links.services.map(item => this.makeEntry(item))}
        </Div1>
        <H1a id="links-web">Web Tools</H1a>
        <Div1>
          {links.web.map(item => this.makeEntry(item))}
        </Div1>
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
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`
const Div2 = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
`
const Img1 = styled.img`
  width: 60%;
  max-height: 500px;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
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

export default Links;

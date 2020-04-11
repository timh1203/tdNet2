// PACKAGES
import styled from 'styled-components';
import { FiArrowUpCircle } from "react-icons/fi";

// LOCAL
import { links } from '../../assets';
import QuickNav from './QuickNav';

class Links extends React.Component {
  makeEntry = (item) => {
    const { name, title, img, affiliate, link, desc, weight } = item;
    return (
      <Div3 key={name}>
        <P1>
          <center><strong>{title}</strong></center><br />
        </P1>
        <A2 href={affiliate || link} alt={name}>
          <center><Img1 src={img} /></center>
        </A2>
        <P1>
          <center><A2 href={affiliate || link} alt={name}>{name}</A2></center><br />
          {desc}<br />
        </P1>
        <P1><center>{weight}</center></P1>
      </Div3>
    )
  }

  render() {
    return (
      <main>
        <Hr1 />
        <QuickNav />
        <Hr1 />
        <H1a id="links-travel">Travel Tools</H1a>
        <Div2>
          {links.travel.map(item => this.makeEntry(item))}
        </Div2>
        <Div1>
          <H1a id="links-phone">Phone Tools</H1a>
          <A1 href="#nav"><FiArrowUpCircle size={50} /></A1>
        </Div1>
        <Div2>
          {links.phone.map(item => this.makeEntry(item))}
        </Div2>
        <Div1>
          <H1a id="links-services">Services</H1a>
          <A1 href="#nav"><FiArrowUpCircle size={50} /></A1>
        </Div1>
        <Div2>
          {links.services.map(item => this.makeEntry(item))}
        </Div2>
        <Div1>
          <H1a id="links-web">Web Tools</H1a>
          <A1 href="#nav"><FiArrowUpCircle size={50} /></A1>
        </Div1>
        <Div2>
          {links.web.map(item => this.makeEntry(item))}
        </Div2>
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
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`
const Div3 = styled.div`
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

export default Links;

// PACKAGES
import { FaTwitterSquare, FaYoutubeSquare, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components';

// LOCAL
import { socials } from '../../../public/static';

const Social = () => (
  <>
    <a href={socials.youtube.url} alt={socials.youtube.alt} target="_blank">
      <FaYoutubeSquare1 size={50} />
    </a>
    <a href={socials.twitter.url} alt={socials.twitter.alt} target="_blank">
      <FaTwitter1 size={50} />
    </a>
    <a href={socials.instagram.url} alt={socials.instagram.alt} target="_blank">
      <FaInstagram1 size={43} />
    </a>
  </>
)


const FaYoutubeSquare1 = styled(FaYoutubeSquare)`
  color: #FF0000;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`
const FaTwitter1 = styled(FaTwitterSquare)`
  color: #0077B5;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`
const FaInstagram1 = styled(FaInstagram)`
  color: white;
  border-radius: 10%;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`

export default Social

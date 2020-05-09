// PACKAGES
import React from 'react'
import { createGlobalStyle } from "styled-components";

// LOCAL
import Nav from '../Nav'
import Footer from '../Footer'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Regular.ttf');
  }
  @font-face {
    font-family: 'Jost';
    src: url('/static/fonts/Jost-Regular.ttf');
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/static/fonts/Raleway-Regular.ttf');
  }
  h1,h2,h3,h4,h5,h6, p, span, button, textarea, input {
    font-family: 'Raleway';
  }
`;

const Wrapper = ({ children }) => {
  return (
    <main>
      <GlobalStyle />
      <Nav />
      {children}
      <Footer />
    </main>
  )
}

export default Wrapper

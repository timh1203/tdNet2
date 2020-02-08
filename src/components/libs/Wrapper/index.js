// PACKAGES
import React from 'react'
import styled from 'styled-components'

// LOCAL
import Nav from '../Nav'
import Footer from '../Footer'

const Wrapper = ({ children }) => {
  return (
    <main>
      <Nav />
      <Div1>
        {children}
      </Div1>
      <Footer />
    </main>
  )
}

const Div1 = styled.div`
  margin: 3rem auto;
  width: 80%;
`
export default Wrapper

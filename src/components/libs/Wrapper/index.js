// PACKAGES
import React from 'react'
import styled from 'styled-components'

// LOCAL
import Nav from '../Nav'
import Footer from '../Footer'

const Wrapper = ({ children }) => {
  return (
    <main>
      <Div1>
        <Nav />
        <Div2>
          {children}
        </Div2>
      </Div1>
      <Footer />
    </main>
  )
}

const Div1 = styled.div`
  min-height: 100%;
  margin-bottom: 288px;
`
const Div2 = styled.div`
  margin: 3rem auto;
  width: 80%;
`
export default Wrapper

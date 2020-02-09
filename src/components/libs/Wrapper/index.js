// PACKAGES
import React from 'react'

// LOCAL
import Nav from '../Nav'
import Footer from '../Footer'

const Wrapper = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  )
}

export default Wrapper

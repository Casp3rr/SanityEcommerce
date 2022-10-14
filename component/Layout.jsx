import React, { Children } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>EcoSpring Retail Gaint</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <Footer>
        <footer />
      </Footer>
    </div>
  )
}

export default Layout
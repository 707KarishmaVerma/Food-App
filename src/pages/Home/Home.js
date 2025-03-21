import React from 'react'
import Layout from '../../components/layouts/Layout'
import Section1 from './Section1'
import About from './About'
import Menu from './Menu'
import Promotion from './Promotion'
import Shop from './Shop'
import "../../styles/HomeStyle.css"
import Blog from './Blog'
import Contact from './Contact'

function Home() {
  return (
    <>
      <Layout>
        {/* {Home Section Hero Banner} */}
        <Section1/>
        {/* Home Section About */}
        <About/>
        {/* Home Section Menu */}
        <Menu/>
        {/* Home Section Promotion */}
        <Promotion/>
        <Shop/>
        <Blog/>
        <Contact/>
      </Layout>
    </>
  )
}

export default Home

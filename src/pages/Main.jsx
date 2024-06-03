import React from 'react'
       //components
import Navbar from "../components/Navbar.jsx"
import Header from '../components/Header.jsx'
import Skills from "../components/Skills.jsx"
import Works from '../components/Works.jsx'
import Contact from '../components/Contact.jsx'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Skills/>
        <Works/>
        <Contact/>
    </div>
  )
}

export default Main
import React from 'react'
import About from './Homepage/About'
import Home from './Homepage/Home'
import Navsection from './Homepage/Navsection'
import Template from './Homepage/Template'

const Homepage = () => {
  return (
    <div className=''>
      <Home />
      <About />
      <Template />
      <Navsection />
    </div>
  )
}

export default Homepage
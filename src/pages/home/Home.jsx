import React from 'react'
import './home.css'
import { Navbar } from '../../components'
import { Header } from '../../containers'


function Home() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
        
    </div>
  )
}

export default Home
import React from 'react'
import Atake from '../components/Atake'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Protected1 from '../components/Protected1'
import Protected2 from '../components/Protected2'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Protected1/>
      <Protected2/>
      <Atake/>
      <Footer/>
    </div>
  )
}

export default Home
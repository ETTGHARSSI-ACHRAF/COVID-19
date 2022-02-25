import React from 'react'
import Atake from '../components/Atake'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Protect2 from '../components/Protect2'
import Protection from '../components/Protection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Protection/>
        <Protect2/>
        <Atake/>
        <Footer/>
    </div>
  )
}

export default Home
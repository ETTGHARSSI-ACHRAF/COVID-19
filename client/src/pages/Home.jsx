import React from 'react'
import Atake from '../components/home/Atake'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navbar from '../components/header/Navbar'
import Protect2 from '../components/home/Protect2'
import Protection from '../components/home/Protection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Protection />
      <Protect2 />
      <Atake />
      <Footer />
    </div>
  )
}

export default Home
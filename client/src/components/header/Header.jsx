import React from 'react'
const imageHead = require('../../images/home-img.png')
const Header = () => {
  return (
    <section className="home" id="home">

      <div className="content">

        <span>Covid-19</span>
        <h3>stay safe, stay home</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores quibusdam ad sapiente quod harum recusandae esse voluptates repellat tempore.</p>
        <a href="#" className="btn">take your vaccine</a>

      </div>

      <div className="image">
        <img src={imageHead} alt="" />
      </div>

    </section>

  )
}

export default Header
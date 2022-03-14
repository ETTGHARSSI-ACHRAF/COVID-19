import React from 'react'
const atake = require('../images/symptoms-img.png')

const Atake = () => {
    return (
        <section className="symtoms" id="symtoms">

            <div className="content">
                <h1 className="heading">What Are The Main <span>Symptoms?</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos ex, magnam odit quaerat labore amet! Numquam obcaecati nobis possimus.</p>
                <ul>
                    <div className="one">
                        <li>fever</li>
                        <li>Tiredness</li>
                        <li>Dry Cough</li>
                    </div>
                    <div className="two">
                        <li>Sore Throat</li>
                        <li>Aches and Pains</li>
                        <li>Shortness of Breath</li>
                    </div>
                </ul>
                <a href="#" className="btn">know more</a>
            </div>

            <div className="image">
                <img src={atake} alt="" />
            </div>

        </section>
    )
}

export default Atake
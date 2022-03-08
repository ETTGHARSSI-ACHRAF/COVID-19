import React from 'react'
const protect1 = require('../../images/protect-1.png')
const protect2 = require('../../images/protect-2.png')
const protect3 = require('../../images/protect-3.png')
const Protection = () => {
    return (
        <section className="protect" id="protect">

            <h1 className="heading">take steps to <span>protect</span> yourself</h1>

            <div className="box-container">

                <div className="box">
                    <img src={protect1} alt="" />
                    <h3>Wear A Face Mask</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
                    <a href="#" className="btn">learn more</a>
                </div>

                <div className="box">
                    <img src={protect2} alt="" />
                    <h3>Wash Your Hands</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
                    <a href="#" className="btn">learn more</a>
                </div>

                <div className="box">
                    <img src={protect3} alt="" />
                    <h3>Avoid Close Contact</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
                    <a href="#" className="btn">learn more</a>
                </div>

            </div>

        </section>
    )
}

export default Protection
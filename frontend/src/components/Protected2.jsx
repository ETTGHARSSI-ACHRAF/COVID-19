import React from 'react'
const img1 = require('../images/dont-img.png')
const img2 = require('../images/do-img.png')

const Protected2 = () => {
    return (
        <section className="prevent" id="prevent">

            <div className="row">

                <div className="image">
                    <img src={img1} alt="" />
                </div>

                <div className="content">
                    <h1 className="heading">things <span>not to do</span> during covid</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nulla, dolor excepturi repellendus officiis expedita saepe veniam minima adipisci tenetur?</p>
                    <ul>
                        <li>Do Not Share Eating</li>
                        <li>Do Not Touch Your Face or Nose</li>
                        <li>Do Not Contact Sick People</li>
                    </ul>
                </div>

            </div>

            <div className="row">

                <div className="content">
                    <h1 className="heading">things <span>to do</span> during covid</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nulla, dolor excepturi repellendus officiis expedita saepe veniam minima adipisci tenetur?</p>
                    <ul>
                        <li>Wash Your Hands For 20 sec</li>
                        <li>Wear a Mask if Available</li>
                        <li>Seek Medical Care Regularly</li>
                    </ul>
                </div>

                <div className="image">
                    <img src={img2} alt="" />
                </div>

            </div>

        </section>
    )
}

export default Protected2
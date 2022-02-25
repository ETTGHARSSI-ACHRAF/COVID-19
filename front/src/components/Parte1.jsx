import React, { useState } from 'react'
import Inscription from './Inscription';
import Maladie from './Maladie';
const imge = require('../images/5033386.png')


const Parte1 = () => {
    const [cin, setCin] = useState('');
    const [show, setShow] = useState(true);
    const serch = () => {
        setShow(false);
    }
    return (
        <section className="home bg-red-400" id="home">
            {show && 
                 <div className="content">
                 <div className="  md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                     <h1 className="text-4xl font-semibold leading-9 text-white text-center">take your vaccine</h1>
                     <h5 className="text-base leading-normal text-center text-white mt-6 codeME" >
                         Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                         a week on every friday so subscribe to get latest news and updates.
                     </h5>
                     <div class="m-4 flex">
                         <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="CIN" onChange={(e) => setCin(e.target.value)} />
                         <button class="px-8 rounded-r-lg bg-blue-400  text-gray-800 font-bold p-4 uppercase border-blue-500 border-t border-b border-r" onClick={() => serch()}>Serche</button>
                     </div>
                 </div>
             </div>
            }
            {!show &&
            <div className="content">
                <Inscription/>
            </div>   
            }
            <div className="image">
                <img src={imge} alt="" />
            </div>
        </section>
    )
}

export default Parte1
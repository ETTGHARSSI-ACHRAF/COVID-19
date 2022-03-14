import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { AiFillFileAdd } from 'react-icons/ai';

const AddAdmin = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [region, setRegion] = useState([]);
    const [idRegion, setIdRegion] = useState('');
    const [cookies, setCookie] = useCookies('');

    useEffect(() => {
        // http://localhost:4000/api/region
        axios.get('http://localhost:4000/api/region')
        .then(res=>{setRegion(res.data.region)})
    },[])
    

    const addAdmin = () => {
        axios.post('http://localhost:4000/api/admin', {
            "nom": nom,
            "prenom": prenom,
            "email": email,
            "password": "$2b$10$u.Q8iOcoPTXR307QydcMoOef4mmivkOWN82h0IowquvKb7jtkcK5.",
            "id_region": idRegion
        }, {
            headers: {
                'Authorization': `Basic ${cookies.token}`
            }
        })
    }

    return (
        <div className=" w-full grid grid-cols-1 gap-4 place-content-center h-48">
            <div className="flex flex-wrap  ml-4">

                <div className="w-full md:w-1/5 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nom
                    </label>
                    <input
                        onChange={(e) => setNom(e.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Nom"
                        required
                    />
                </div>
                <div className="w-full md:w-1/5 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Prenom
                    </label>
                    <input
                        onChange={(e) => setPrenom(e.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Prenom"
                        required
                    />
                </div>
                <div className="w-full md:w-1/5 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email"
                        placeholder="email"
                        required
                    />
                </div>
                <div className="w-full md:w-1/5 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Region
                    </label>
                    <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        onChange={(e) => { setIdRegion(e.target.value) }}
                    >
                        <option ></option>
                         {region.map(reg=> (
                                            <option key={reg._id} value={reg._id}>{reg.nom}</option>
                                        ))} 
                    </select>
                </div>

                <div className="w-full md:w-1/5 px-3 mt-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded " onClick={() => addAdmin()}>
                        <AiFillFileAdd />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin
import React, { useState, useEffect } from 'react'
import maladies from '../../maladie'
import axios from 'axios'
const imge = require('../../images/5033386.png')


const Parte1 = () => {
    const [cin, setCIN] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');
    const [adress, setAdress] = useState('');
    const [dose, setDose] = useState('');
    const [maladie, setMaladie] = useState('');
    const [traitement, setTraitement] = useState([]);
    const [effetsecSeconddose, setEffetsecSeconddose] = useState('');
    const [effetsecFirstdose, setEffetsecFirstdose] = useState('');
    const [email, setEmail] = useState('');
    const [centre, setCentre] = useState('');






    const [show, setShow] = useState(true);
    const [hiden, setHiden] = useState(false);
    const [firstHid, setFirst] = useState(false);
    const [secondHid, setSecond] = useState(false);
    const [tirthHid, setTirth] = useState(false);
    const [res, setRes] = useState('');
    const [idRegion,setIdRegion] = useState();
    const getTraitemet = () => {
        maladies.forEach(element => {
            if (element.maladie === maladie) {
                console.log(element.maladie);
                setTraitement(element.traitemen);
                console.log(traitement);
            }
        });
    }
    useEffect(() => {
        getTraitemet();
    }, [maladie])


    const showInput = () => {
        setShow(false);
        setHiden(true);
    }
    const showFirstDose = () => {
        setFirst(true);
        setSecond(false);
        setTirth(false);



    }
    const showSecondDose = () => {
        setFirst(false);
        setSecond(true);
        setHiden(false);
        setTirth(false);


    }
    const showTirthDose = () => {
        setFirst(false);
        setSecond(false);
        setTirth(true);
        setHiden(false);

    }
    const hidenInput = () => {
        setShow(true);
        setHiden(false);
    }
    const [showw, setShoww] = useState(true);
    const serch = () => {
        setShoww(false);
    }

    const addUser = async (e) => {
        e.preventDefault();
        const Data = {
            'CIN': cin,
            'age': age,
            'tel': tel,
            'adress': adress,
            'dose': dose,
            'maladie': maladie,
            'traitement': traitement,
            'effetsecFirstdose': effetsecFirstdose,
            'effetsecSeconddose': effetsecSeconddose,
            'centre': centre,
            'email': email,
            'id_region':idRegion
        };
        await axios.post('http://localhost:8000/covid-data/createData', Data)
            .then(res => setRes(res.data.Message))


    }

    // Get region 
    const [regionData, setRegionData] = useState([]);
    const getRegion = async () => {
        const RegionRes = await axios.get('http://localhost:8000/api/region')
        setRegionData(RegionRes.data.region)
    }
    console.log(regionData)

    // Get centre by region 
    const [centreData, setCentreData] = useState([]);
    const [region, setCenterByregion] = useState([]);
    
    const getCentre = async () => {
        console.log(region)
        const centerRes = await axios.get(`http://localhost:8000/api/centre/${region}`)
        setCentreData(centerRes.data.centre)

        console.log('fromback', centerRes.data.centre)

    }
    console.log('voila', centreData)

    useEffect(() => {
        getRegion();
    }, [])
    // useEffect(() => {
    //     getCentre();
    // }, [])



    return (
        <section className="home bg-red-400" id="home">
            {showw &&
                <div className="content">
                    <div className="  md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 className="text-4xl font-semibold leading-9 text-white text-center">take your vaccine</h1>
                        <h5 className="text-base leading-normal text-center text-white mt-6 codeME" >
                            Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                            a week on every friday so subscribe to get latest news and updates.
                        </h5>
                        <div class="m-4 flex">
                            <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                                onChange={(e) => setCIN(e.target.value)}
                                placeholder="CIN"
                                value={cin}
                                required
                            />
                            <button class="px-8 rounded-r-lg bg-blue-400  text-gray-800 font-bold p-4 uppercase border-blue-500 border-t border-b border-r" onClick={() => serch()}>Serche</button>
                        </div>
                    </div>
                </div>
            }
            {!showw &&
                <div className="content">
                    <div className="h-screen flex justify-center items-center flex-col">

                        <h1 className="text-4xl font-semibold leading-9 text-white text-center py-6">Take your dose :)</h1>
                        <div className="lg:w-4/5 md:w-1/2 w-2/3">

                            <form onSubmit={addUser} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                                {res &&

                                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">{res}</h1>
                                }
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="age">Age</label>

                                    <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number" id="age"
                                        onChange={(e) => setAge(e.target.value)}
                                        placeholder="Age"
                                        value={age}
                                        required />
                                </div>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="tel">Tel</label>
                                    <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number" id="tel"
                                        onChange={(e) => setTel(e.target.value)}
                                        placeholder="tel"
                                        value={tel} />
                                </div>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="adress">adresse</label>
                                    <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" id="adress"
                                        onChange={(e) => setAdress(e.target.value)}
                                        placeholder="adress"
                                        value={adress}
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="email">email</label>
                                    <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email"
                                        value={email}
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="region">Region</label>
                                    <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                        onChange={(e) => { setCenterByregion(e.target.value, getCentre(),setIdRegion(e.target.value)) }}

                                    >
                                        {regionData.map(region => (

                                            <option
                                                value={region._id}> {region.nom}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <div>
                                    <label className="text-gray-800 font-semibold block my-3 text-md" for="centre">centre</label>
                                    <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                        onChange={(e) => { setCentre(e.target.value) }}
                                    >
                                        {centreData.map(centre => (
                                            <option value={centre.nom}>{centre.nom}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* dose */}
                                <div class="main flex border rounded-full overflow-hidden m-4 select-none bg-white">
                                    <div class="title py-3 my-auto px-8 bg-red-500 text-white text-sm font-semibold ">DOSE</div>
                                    <label class="flex radio p-2 cursor-pointer ">
                                        <input class="my-auto transform scale-125" type="radio"
                                            name="dose" value="firstDose"
                                            onChange={(e) => setDose(e.target.value)}
                                            onClick={(e) => showFirstDose(e)} />
                                        <div class="title px-2">1ere dose</div>
                                    </label>

                                    <label class="flex radio p-2 cursor-pointer">
                                        <input class="my-auto transform scale-125" type="radio"
                                            name="dose" value="secondDose"
                                            onClick={(e) => showSecondDose(e)}
                                            onChange={(e) => setDose(e.target.value)} />
                                        <div class="title px-2">2eme dose</div>
                                    </label>
                                    <label class="flex radio p-2 cursor-pointer">
                                        <input class="my-auto transform scale-125" type="radio"
                                            name="dose" value="tirthDose"
                                            onClick={(e) => showTirthDose(e)}
                                            onChange={(e) => setDose(e.target.value)} />
                                        <div class="title px-2">3eme dose</div>
                                    </label>
                                </div>
                                {/* findose */}

                                {firstHid &&
                                    <div class="main flex border rounded-full overflow-hidden m-4 select-none bg-white">
                                        <div class="title py-3 my-auto px-8 bg-red-500 text-white text-sm font-semibold ">Vous souffrez d'une maladie ?</div>
                                        <label class="flex radio p-2 cursor-pointer ">
                                            <input class="my-auto transform scale-125" type="radio"
                                                onClick={(e) => showInput(e)}
                                                value="oui" name="maladie" />
                                            <div class="title px-2">Oui</div>
                                        </label>

                                        <label class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio"
                                                onClick={(e) => hidenInput(e)}
                                                onChange={(e) => {
                                                    setMaladie(e.target.value)
                                                    setTraitement(e.target.value)
                                                }}

                                                value="Non"
                                                name="maladie" />
                                            <div class="title px-2">Non</div>
                                        </label>

                                    </div>
                                }
                                {secondHid &&
                                    <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                                        <div class="title py-3 my-auto px-5 bg-red-500 text-white text-sm font-semibold mr-3">Avez vous des effets secondaire apres votre 1er dose?</div>
                                        <label class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio"
                                                onChange={(e) => {
                                                    setEffetsecFirstdose(e.target.value)
                                                }}
                                                value="oui" name="maladie" />
                                            <div class="title px-2">Oui</div>
                                        </label>

                                        <label class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio"
                                                onChange={(e) => {
                                                    setEffetsecFirstdose(e.target.value)
                                                }}
                                                value="Non"
                                                name="maladie" />
                                            <div class="title px-2">Non</div>
                                        </label>
                                    </div>
                                }
                                {tirthHid &&
                                    <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                                        <div class="title py-3 my-auto px-5 bg-red-500 text-white text-sm font-semibold mr-3">Avez vous des effets secondaire apres votre 2eme dose?</div>
                                        <label class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio"
                                                onChange={(e) => {
                                                    setEffetsecSeconddose(e.target.value)
                                                }}
                                                value="oui" name="maladie" />
                                            <div class="title px-2">Oui</div>
                                        </label>

                                        <label class="flex radio p-2 cursor-pointer">
                                            <input class="my-auto transform scale-125" type="radio"
                                                value="Non"
                                                name="maladie"
                                                onChange={(e) => {
                                                    setEffetsecSeconddose(e.target.value)
                                                }}
                                            />
                                            <div class="title px-2">Non</div>
                                        </label>
                                    </div>
                                }
                                {hiden &&

                                    <>
                                        <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                                            <div class="title py-3 my-auto px-5 bg-red-500 text-white text-sm font-semibold mr-3">Traitement</div>
                                            {maladies.map((maladie, index) => (
                                                <>

                                                    <label key={index} class="flex radio p-2 cursor-pointer">
                                                        <input class="my-auto transform scale-125" type="radio"
                                                            value={maladie.maladie}
                                                            name='nom_maladie'
                                                            onChange={(e) => { setMaladie(e.target.value) }}
                                                        />
                                                        <div class="title px-2">{maladie.maladie}</div>
                                                    </label>


                                                </>
                                            ))}

                                        </div>


                                        <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                                            <div class="title py-3 my-auto px-5 bg-red-500 text-white text-sm font-semibold mr-3">Medicament</div>

                                            <label class="flex radio p-2 cursor-pointer">
                                                <input class="my-auto transform scale-125"
                                                    onChange={(e) => { setTraitement(e.target.value) }}
                                                    value={traitement} />
                                            </label>
                                        </div>
                                    </>
                                }

                                <button type="submit" className="w-full mt-6 bg-red-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">save</button>

                            </form>
                        </div>
                    </div>
                </div>
            }
            <div className="image">
                <img src={imge} alt="" />
            </div>
        </section>
    )
}

export default Parte1;
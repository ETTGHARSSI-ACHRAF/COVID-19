import React from 'react'

const Inscription = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center py-6">your 1 ere dose</h1>
            <div className="lg:w-2/5 md:w-1/2 w-2/3">

                <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Formregister</h1>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" for="username">last name</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="lastname" placeholder="username" />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" for="username">first name</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="firstname" placeholder="username" />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" for="username">adresse</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="adresse" />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" for="username">Region</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="ville" />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" for="username">centre</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="centre" />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" for="password">date naissance</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="date" />
                    </div>
                    <div class="main flex border rounded-full overflow-hidden m-4 select-none bg-white">
                        <div class="title py-3 my-auto px-8 bg-red-500 text-white text-sm font-semibold ">MAladie</div>
                        <label class="flex radio p-2 cursor-pointer ">
                            <input class="my-auto transform scale-125" type="radio" name="sfg" />
                            <div class="title px-2">Non</div>
                        </label>

                        <label class="flex radio p-2 cursor-pointer">
                            <input class="my-auto transform scale-125" type="radio" name="sfg" />
                            <div class="title px-2">Yes</div>
                        </label>


                    </div>
                    <button type="submit" className="w-full mt-6 bg-red-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>

                </form>
            </div>
        </div>
    )
}

export default Inscription
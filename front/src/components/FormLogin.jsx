import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();
    const login = () => {
        axios.post('http://localhost:5000/api/admin/login', {
            "email": email,
            "password": password
        })
            .then(res => {
                if (res.data.success === 1) {
                    setCookie('token',res.data.token,{ httpOnly: false });
                    navigate('/dashbord');
                } else {
                    setErr(true);
                }
            })
            
    }
    return (

        <div className="h-screen bg-gradient-to-br from-red-400 to-red-300 flex justify-center items-center w-full">

            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                <div className="space-y-4">
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>
                    <div>
                        <label  className="block mb-1 text-gray-600 font-semibold">Email</label>
                        <input type="text" className="bg-indigo-50 px-4 py-2  rounded-md w-full" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label  className="block mb-1 text-gray-600 font-semibold">Password</label>
                        <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {err &&
                        <div>
                            <p className="text-red-600 text-lg ">Please choose a password.</p>
                        </div>
                    }


                </div>
                <button className="mt-4 w-full bg-gradient-to-tr from-red-400 to-red-300 text-indigo-100 py-2 rounded-md text-lg tracking-wide" onClick={() => login()} >Login</button>
            </div>

        </div>
    )
}

export default FormLogin
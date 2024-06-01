import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { SignupUser } from '../../ReduxStore/Slice/admin/AdminSlice';

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [userName, setUserName] = useState('')
    const [Phone, setPhone] = useState('')

    const handleSubmit = async (e) => {
        const data = {
            Phone: Phone,
            FullName: fullname,
            userName: userName,
            Email: email,
            Password: password,
            Role: "USER"
        }
        await dispatch(SignupUser(data)).unwrap()
            .then((response) => {
                if (response.status) {
                    Swal.fire({
                        title: "Register Successful!",
                        text: "user Register successfully !",
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true,
                    });
                    setTimeout(() => {
                        navigate('/home')
                    }, 1500)
                }
                else {
                    Swal.fire({
                        title: "Register Failed!",
                        text: "user Register Failed !",
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true,
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Register Failed!",
                    text: "user Register Failed !",
                    icon: "error",
                    timer: 1500,
                    timerProgressBar: true,
                });
            }
            )

    }



    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        register youre here
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fullname"
                                    name="fullname"
                                    type="fullname"
                                    autoComplete="fullname"
                                    placeholder='Enter your full name'
                                    required
                                    onChange={(e) => setFullname(e.target.value)}
                                    value={fullname}
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    placeholder='Enter your username'
                                    required
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
                                    className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder='Enter your email'
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Phone"
                                    name="Phone"
                                    type="Phone"
                                    autoComplete="Phone"
                                    placeholder='Enter your Phone Number'
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={Phone}
                                    className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="Phone"
                                    placeholder='Enter your password'
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* <div>
                            <label htmlFor="Phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Type
                            </label>
                            <div className="mt-2">
                                <select name="type" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="null" className="text-gray-500">Select Type</option>
                                    <option value="User">User</option>
                                    <option value="Sheller">Sheller</option>
                                </select>
                            </div>
                        </div> */}
 

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        have account?{' '}
                        <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>

        </>
    );
}

export default Signup;

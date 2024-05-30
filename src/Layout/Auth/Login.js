import React , {useState , useEffect} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { Login_User } from '../../ReduxStore/Slice/admin/AdminSlice';

const Login = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const [email , setEmail] = useState('')
    const [pass , setPass] = useState('')

    const handleLogin = async(e) => {
        const data = { Email : email, Password : pass }
        await dispacth(Login_User(data)).unwrap()
        .then((response) => {
            if(response.status){
                localStorage.setItem('user_Details' , JSON.stringify(response.data))
                Swal.fire({
                    title: "Login Successful!",
                    text: "user login successfully !",
                    icon: "success",
                    timer:1500,
                    timerProgressBar: true,
                  });
                  setTimeout(() => {
                      navigate('/home')
                  },1500)

            }
            else{
                Swal.fire({
                    title: "Login Failed!",
                    text: "user login failed !",
                    icon: "error",
                    timer:1500,
                    timerProgressBar: true,
                  });
            }
            
        })
        .catch((error) => {
            Swal.fire({
                title: "Login Failed!",
                text: "user login failed !",
                icon: "error",
                timer:1500,
                timerProgressBar: true,
              });
        })       
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
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='Enter your password'
                                    autoComplete="current-password"
                                    onChange={(e) => setPass(e.target.value)}
                                    value={pass}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleLogin}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Do not have account?{' '}
                        <Link to={'/signup'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                         Register here 
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;

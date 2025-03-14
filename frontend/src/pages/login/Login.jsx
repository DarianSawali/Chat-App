import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login 
                <span className='text-purple-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>   
                    <div className='mt-2'>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='mt-2'>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* gender */}

                    <Link to='/signup' className='p-1 text-sm hover:underline hover:text-purple-500 focus:text-purple-500 mt-4 inline-block text-gray-300'>
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;


// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
//               <h1 className='text-3x1 font-semibold text-center text-gray-300'>Login 
//               <span className='text-purple-500'> ChatApp</span>
//               </h1>
  
//               <form action="">   
//                   <div>
//                       <label className='label p-3'>
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
//                   </div>
//                   <div>
//                       <label className='label mt-2'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//                   </div>
//                   <a href="#" className='p-1 text-sm hover:underline hover:text-purple-500 focus:text-purple-500 mt-4 inline-block'>
//                       {"Don't"} have an account?
//                   </a>
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2'>Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
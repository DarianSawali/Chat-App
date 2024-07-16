import React, { useState } from 'react';
import GenderBox from './GenderBox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);

    };

    const handleCheckbox = (gender) => {
        setInputs({ ...inputs, gender });
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-purple-500'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className='mt-2'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Full Name'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div className='mt-2'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Username'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div className='mt-2'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div className='mt-2'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className='p-2'>
                        <GenderBox onCheckboxChange={handleCheckbox} selectedGender={inputs.gender} />
                    </div>
                    <Link
                        to='/login'
                        className='p-1 text-sm hover:underline hover:text-purple-500 focus:text-purple-500 mt-1 inline-block'
                    >
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;






// const SignUp = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
//               <h1 className='text-3x1 font-semibold text-center text-gray-300'>Sign Up 
//               <span className='text-purple-500'> ChatApp</span>
//               </h1>
  
//               <form action="">   
//               <div className='mt-2'>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Full Name</span>
//                       </label>
//                       <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10'/>
//                   </div>
  
//                   <div className='mt-2'>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
//                   </div>
  
//                   <div className='mt-2'>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//                   </div>
  
//                   <div className='mt-2'>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Confirm Password</span>
//                       </label>
//                       <input type="text" placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
//                   </div>
  
//                   <div className='p-2'>
//                       <GenderBox />
//                   </div>
                  
  
//                   <a href="#" className='p-1 text-sm hover:underline hover:text-purple-500 focus:text-purple-500 mt-1 inline-block'>
//                       Already have an account?
//                   </a>
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
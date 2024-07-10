import React from 'react'
import GenderBox from './GenderBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
            <h1 className='text-3x1 font-semibold text-center text-gray-300'>Sign Up 
            <span className='text-purple-500'> ChatApp</span>
            </h1>

            <form action="">   
            <div className='mt-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10'/>
                </div>

                <div className='mt-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
                </div>

                <div className='mt-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
                </div>

                <div className='mt-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="text" placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
                </div>

                <div className='p-2'>
                    <GenderBox />
                </div>
                

                <a href="#" className='p-1 text-sm hover:underline hover:text-purple-500 focus:text-purple-500 mt-1 inline-block'>
                    Already have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp

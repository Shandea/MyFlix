import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className='w-full h-full'>
        <img
            className='hidden sm:block absolute w-full h-full object-cover' 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-scree'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input 
                            type='email' 
                            placeholder='Email' 
                            autoComplete='email'
                            className='p-3 my-2 bg-gray-700 rounded' 
                        />
                        <input 
                            type='password' 
                            placeholder='Password' 
                            autoComplete='current-password'
                            className='p-3 my-2 bg-gray-700 rounded' 
                        />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex item-center justify-between text-sm text-gray-600'>
                            <p><input className='mr-2' type='checkbox' />Remember Me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>
                                Already subscribed to MyFlix?
                            </span>{' '}
                            <Link to='/login'> Sign In</Link>
                         </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
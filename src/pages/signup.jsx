import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authcontext'
// import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'

const Signup = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const {user,signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()  
        try{
            await signUp(email,password)
            console.log("successfully signed In")
            navigate('/')
            alert("sign in successful")

        }
        catch(err){
            console.log(err)
        }
        
    }
  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block h-full w-full absolute object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/'/>
            <div className='absolute bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed px-4 py-28 z-50 w-full'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold '>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-16'>
                            <input 
                                onChange={(e)=>setemail(e.target.value)}
                                className='py-2 my-3 p-2 bg-gray-700'
                                type='email'
                                placeholder='Enter Email'
                                autoComplete='email'
                            />  
                            <input 
                                onChange={(e)=>setpassword(e.target.value)}
                                className='py-2 my-3 p-2 bg-gray-700'
                                type='password'
                                placeholder='Enter Password'
                                autoComplete='password'
                            />
                            <button className='bg-red-600 py-3 my-3 font-bold rounded'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p>Need help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>Already Subscribe to Netflix?</span>{''}
                            <Link to="/login"> Sign In</Link>
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
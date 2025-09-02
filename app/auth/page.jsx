"use client"
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import Image from 'next/image'
import React from 'react'


function Login() {

  /**
   * 💛Used to sigh-in with google
   */
  const signInWithGoogle= async()=>{
    const {error}=await supabase.auth.signInWithOAuth({ provider:'google'
    })

    if(error)
    {
      console.error('Error:',error.message)
    }

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='flex flex-col items-center  border rounded-2xl p-5 pb-12 bg-blue-50 mt-4'>
        <Image 
          src="/logo.png" 
          alt="logo" 
          width={220} 
          height={10} 
          className="mb-1 py-8" 
        />

        <div className="flex flex-col items-center ">
          <Image 
            src="/login.jpg" 
            alt="login" 
            width={600} 
            height={400} 
            className="w-[400px] h-[250px] rounded-2xl " 
          />

          <h2 className="text-2xl font-bold text-center mt-4 pb-3">
            Welcome To SelectIQ
          </h2>
          <p className="text-gray-500 text-center">
            Sign In With Google Authentication
          </p>
          <Button className="mt-7 w-full" onClick={signInWithGoogle} >Login With Google</Button>
        </div>
      </div>
    </div>
  )
}

export default Login

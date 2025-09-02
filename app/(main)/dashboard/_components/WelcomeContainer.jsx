"use client"
import { useUser } from '@/app/provider'
import Image from 'next/image';
import React from 'react'

function WelcomeContainer() {
  const { user } = useUser();

  return (
    <div className='bg-indigo-100 p-4 m-5  rounded-xl flex justify-between items-center '>
      <div>
        <h2 className='text-lg font-bold'>
          Welcome Back, {user?.name || "Guest"}
        </h2>
        <h2 className='text-gray-600'>Smart Hiring, Made Simple</h2>
      </div>
      {user&& <Image src={user?.picture} alt='userAvatar' width={45} height={45} className='rounded-full' />}
    </div>
  )
}

export default WelcomeContainer

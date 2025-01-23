import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-slate-200 text-black px-10 py-5'>
      <div>Simple Blog</div>
      <div className='flex gap-3 items-center list-none'>
        <Link href={'/'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
      </div>
        <div>
            <LoginLink>
            <button className='btn py-3 px-5 bg-blue-500 rounded-lg text-white font-semibold mr-5'>Login</button>
            </LoginLink>
            <LogoutLink>
            <button className='btn py-3 px-5 bg-blue-500 rounded-lg text-white font-semibold'>Logout</button>
            </LogoutLink>
            
        </div>
    </div>
  )
}

export default Navbar

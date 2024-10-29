import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <>
      <Link href='/' className='relative text-2xl font-bold flex items-end gap-1'>
        <h1>Ocean</h1>
        <div className='w-2 h-2 rounded-full bg-sky-700 absolute right-[-.8rem] bottom-[.5rem]'/>
      </Link>
    </>
  )
}

export default Logo

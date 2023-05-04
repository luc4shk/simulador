import React from 'react'

export default function NavBar({cambiar, estado}) {
  return (
      <nav className='p-5 border-b-2 flex gap-8 '>
        <span onClick={cambiar} className=' font-semibold cursor-pointer'>&#9776;</span>
        <h2 className=''>Página Principal</h2>
        </nav>
  )
}

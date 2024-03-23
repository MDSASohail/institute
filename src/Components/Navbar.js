import React from 'react'

function Navbar() {
  return (
    <div className='border-2 h-10 '>
      <div className="flex justify-between mx-3 items-center">
        <p>All Students</p>
        <div>
           <button className='border-2 border-blue-500 ml-4 p-2'>Add Student</button>
           <button className='border-2 border-blue-500 ml-4 p-2'>LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
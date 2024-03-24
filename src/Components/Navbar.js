import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='border-2 h-10 '>
      <div className="flex justify-between mx-3 items-center">
        <p>All Students</p>
        <div>
           <Link to={'/addUser'}>
              <button className='border-2 border-blue-500 ml-4 p-2'>Add Student</button>
           </Link>
           <button className='border-2 border-blue-500 ml-4 p-2'>LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
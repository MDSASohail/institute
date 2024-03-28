import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className=' h-12 navbar box-border  sticky  top-0 z-10  '>
      <div className="flex  mr-8 justify-between  items-center">
        <p className=' w-1/3 text-center'>All Students</p>
        <div>
           <Link to={'/addUser'}>
              <button className=' rounded-xl btn border-blue-500 p-1  '>Add Student</button>
           </Link>
           <button className=' rounded-xl border-blue-500 btn ml-4 p-2'>LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
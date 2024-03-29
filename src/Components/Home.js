import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
  return (
    <div className='bg'>
              <div className='text-center cursor-pointer' onClick={()=>{navigate('/login')}}> Login</div>

              <div>Rest Website content will be here</div>
    </div>
  )
}

export default Home
import React from 'react'
import { Route, Routes }from 'react-router-dom'
import Navbar from './Navbar'
import AllStudents from './All Students'
function AdminHomePage() {
  return (
    <div>
        <Navbar/>
        <AllStudents/>
    </div>
  )
}

export default AdminHomePage 
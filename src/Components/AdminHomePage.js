import React, { createContext, useContext, useReducer } from 'react'
import { Route, Routes }from 'react-router-dom'
import Navbar from './Navbar'
import AllStudents from './All Students'
import Reducer from '../ContextApi/Reducer'

function AdminHomePage() {


  return (
      
    
         <div>
        <Navbar/>
        <AllStudents/>
        </div>
    

   

  )
}

export default AdminHomePage 
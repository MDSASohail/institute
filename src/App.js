
import AllStudents from "./Components/All Students";
import Navbar from "./Components/Navbar";
import  './App.css'
import {BrowserRouter as Router,Route,Routes, useNavigate,Navigate} from 'react-router-dom'
import Certificate from "./Components/Certificate";
import AdminHomePage from "./Components/AdminHomePage";
import { useReducer,createContext,useEffect, useState } from "react";
import Reducer from "./ContextApi/Reducer";
import UserCertifaca from './Components/UserCertificate'
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Todo from "./Components/Todo";
export const allData=createContext();
function App() {
  const initialData={allStudents:"",singleSelectedStudent:"",fullDetail:""};
     const [value,dispatch]=useReducer(Reducer,initialData);
     
    //  const adminUser=JSON.parse(sessionStorage.getItem("adminLogin"))|| null;
     const [user,setUser]=useState(JSON.parse(sessionStorage.getItem("adminLogin"))|| null);
     
    
  return (
    <>
    
      
      <allData.Provider value={{allStudents:value.allStudents,singleSelectedStudent:value.singleSelectedStudent,fullDetail:value.fullDetail,dispatch:dispatch,setUser:setUser,loginUser:user}}>
       
         <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/admin/*" element={user?<AdminHomePage/>:<Navigate to={'/login'}/>}/>
          <Route path="/user/:id" element={<UserCertifaca/>}/>
         </Routes>
         
         </allData.Provider>

        
      
        
    

    

   </>
  );
}

export default App;

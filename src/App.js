
import AllStudents from "./Components/All Students";
import Navbar from "./Components/Navbar";
import  './App.css'
import {BrowserRouter as Router,Route,Routes, useNavigate,Navigate} from 'react-router-dom'
import Certificate from "./Components/Certificate";
import AdminHomePage from "./Components/AdminHomePage";
import { useReducer,createContext,useEffect } from "react";
import Reducer from "./ContextApi/Reducer";
import UserCertifaca from './Components/UserCertificate'
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
export const allData=createContext();
function App() {
  const initialData={allStudents:"",singleSelectedStudent:"",fullDetail:""};
     const [value,dispatch]=useReducer(Reducer,initialData);
     
     const adminUser=sessionStorage.getItem("adminLogin");
    
  return (
    <>
    
      
      <allData.Provider value={{allStudents:value.allStudents,singleSelectedStudent:value.singleSelectedStudent,fullDetail:value.fullDetail,dispatch:dispatch}}>
       
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/*" element={adminUser?<AdminHomePage/>:<Navigate to={'/login'}/>}/>
          <Route path="/user/:id" element={<UserCertifaca/>}/>
          <Route path="/login" element={<LoginPage/>}/>
         </Routes>
         
         </allData.Provider>
      
        
    

    

   </>
  );
}

export default App;

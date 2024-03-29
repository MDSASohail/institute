
import AllStudents from "./Components/All Students";
import Navbar from "./Components/Navbar";
import  './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Certificate from "./Components/Certificate";
import AdminHomePage from "./Components/AdminHomePage";
import { useReducer,createContext } from "react";
import Reducer from "./ContextApi/Reducer";
import UserCertifaca from './Components/UserCertificate'
export const allData=createContext();
function App() {
  const initialData={allStudents:"",singleSelectedStudent:"",fullDetail:""};
     const [value,dispatch]=useReducer(Reducer,initialData);
  return (
    <>
    <allData.Provider value={{allStudents:value.allStudents,singleSelectedStudent:value.singleSelectedStudent,fullDetail:value.fullDetail,dispatch:dispatch}}>
    <div className="">
      <Router>
         <Routes>
          <Route path="/admin/*" element={<AdminHomePage/>}/>
          <Route path="/user/:id" element={<UserCertifaca/>}/>
         </Routes>
         

      </Router>
        
    </div>

    </allData.Provider>

   </>
  );
}

export default App;

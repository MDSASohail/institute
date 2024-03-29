
import AllStudents from "./Components/All Students";
import Navbar from "./Components/Navbar";
import  './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Certificate from "./Components/Certificate";
import AdminHomePage from "./Components/AdminHomePage";
function App() {
  return (
    <div className="">
      <Router>
         <Routes>
          <Route path="/admin/*" element={<AdminHomePage/>}/>
          <Route path="/user/*" element={<Certificate/>}/>
         </Routes>
         

      </Router>
        
    </div>
  );
}

export default App;

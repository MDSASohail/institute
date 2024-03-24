
import AllStudents from "./Components/All Students";
import Navbar from "./Components/Navbar";
import  './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="border-2 border-red-400">
      <Router>
         <Navbar/>
        <AllStudents/>

      </Router>
        
    </div>
  );
}

export default App;

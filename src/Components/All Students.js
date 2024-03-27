import React, { useEffect, useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import AddUser from './AddUser';
import axios from 'axios';
import SingleStudentDetail from './SingleStudentDetail';
function AllStudents() {

    
    const [show,setShow]=useState(false);
    const [stu,setStu]=useState([])
    const [value,setValue]=useState("");
    const [filterUser,setFilterUser]=useState([]);
    const [singleUser,setSingleUser]=useState("");
     const [catagory,setCategory]=useState("fullName")
  
    const fetchData=async ()=>{
      try {
       const data=await axios.get('http://localhost:8000/user/');
       const d=data.data;
       setStu(d);
       setFilterUser(d);
       console.log("All student is ",stu);
       console.log("Data is ",d)
      } catch (error) {
         console.log("Error is ",error.message)
      }
  }
 
    useEffect(()=>{
      console.log("All student is before ",stu);
             

             fetchData();
    },[])
    function hancleChange(e)
    {
        
       
       if(e.target.value=="")
       {
         setFilterUser(stu);
         return;
       }
       const inputValue=e.target.value.toLowerCase();
       
       if(catagory=="fullName")
       {const filterUser=stu.filter((s)=>s.fullName.toLowerCase().includes(inputValue));setFilterUser(filterUser);}
      else
      {const filterUser=stu.filter((s)=>s.registrationNo.toLowerCase().includes(inputValue));setFilterUser(filterUser);}
       
          
   }
    return (
    <div className='border-2 AllStudentsMainDiv relative flex  border-emerald-600'>
        {/* For List of users */}
         
         <div className={show?'trasitionHide border-2 h-full   listStudentDiv bg-red-900 border-black ':" bg-red-900 h-full trassitionShow border-2  listStudentDiv border-black "}>
            <div className='absolute showHideBTN top-0  '  onClick={()=>{setShow(!show)}}>{show?">":"<"}</div>
               <div className="searchMainDiv flex  ml-3 border-2   border-pink-300 items-center">
                  <p className='mr-4'>Search By 
                      <select className='border-2 ml-2' name="" id="" onChange={(e)=>{setCategory(e.target.value)}}>
                         <option  value="fullName" >Name</option>
                         <option  value="userId">UserId</option>
                      </select>
                  </p>
                  <input type="text"  onChange={(e)=>{hancleChange(e)}}  placeholder='Search here' />
               </div>

               <div className="listOfAllUsers overflow-x-hidden border-2 h-full  border-red-900  overflow-scroll ml-3">
                  {filterUser.map((student,index)=>{
                     
                     return(
                        <>
                          <Link to={`/${student._id}`}>
                            <li onClick={()=>{setSingleUser(student);setShow(!show);}} className={singleUser._id===student._id?'border-2 mt-1 bg-red-400 eachStudent cursor-pointer list-none  p-1':'border-2 mt-1 eachStudent cursor-pointer list-none  p-1'}>{student.fullName} {student.registrationNo}</li>
                          </Link>
                        </>
                     )
                  })}
               </div>
         </div>
         <div className="specificUserDetail border-2 border-green-800">
             {/* {singleUser ==""?"Select a user to see detail":<div>Selected user is {singleUser}</div>} */}
             <Routes>
               <Route path='/' element={<div>Select a user </div>}/>
                <Route path='/addUser/' element={<AddUser fetchData={fetchData} which={true}/>}/>
                <Route path='/:id/*' element={<SingleStudentDetail id={singleUser._id} fetchData={fetchData} registrationNo={singleUser.registrationNo} fullName={singleUser.fullName}/>}/>
                
             </Routes>

             
             
         </div>
         
    </div>
  )
}

export default AllStudents
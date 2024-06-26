import React, { useContext, useEffect, useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import AddUser from './AddUser';
import axios from 'axios';
import SingleStudentDetail from './SingleStudentDetail';
import { allData } from '../App';
function AllStudents() {

    
    const [show,setShow]=useState(false);
    
    
    const [filterUser,setFilterUser]=useState([]);
    const [singleUser,setSingleUser]=useState("");
     const [catagory,setCategory]=useState("fullName")
     const {dispatch,allStudents,singleSelectedStudent}=useContext(allData);
    const fetchData=async ()=>{
      try {
       const data=await axios.get('https://institutenode.vercel.app/user/');
       const d=data.data;
       dispatch({type:"AllStudents",payload:d})
       
       setFilterUser(d);
      //  console.log("All student is ",stu);
      //  console.log("Data is ",d)
      } catch (error) {
         console.log("Error is ",error.message)
      }
  }
 
    useEffect(()=>{
      // console.log("All student is before ",stu);
             

             fetchData();
    },[])
    function hancleChange(e)
    {
        
       
       if(e.target.value=="")
       {
         setFilterUser(allStudents);
         return;
       }
       const inputValue=e.target.value.toLowerCase();
       
       if(catagory=="fullName")
       {const filterUser=allStudents.filter((s)=>s.fullName.toLowerCase().includes(inputValue));setFilterUser(filterUser);}
      else
      {const filterUser=allStudents.filter((s)=>s.registrationNo.toLowerCase().includes(inputValue));setFilterUser(filterUser);}
       
          
   }
    return (
    <div className=' AllStudentsMainDiv relative flex  '>
        {/* For List of users */}
         
         <div className={show?'trasitionHide  z-20    listStudentDiv   ':"  z-20  trassitionShow   listStudentDiv   "}>
            <div className='absolute showHideBTN eachStudent top-3  '  onClick={()=>{setShow(!show)}}>{show?">":"<"}</div>
               <div className="searchMainDiv   p-2 box-border      items-center">
                  <strong className='text-center inline-block w-full mb-2'>Search By </strong>
                      <div className=' flex justify-around'>
                      <select className='outline-none ml-2 bg-transparent' name="" id="" onChange={(e)=>{setCategory(e.target.value)}}>
                         <option  value="fullName" >Name</option>
                         <option  value="userId">Registration No</option>
                         
                      </select>

                      <input type="text" className='bg-transparent outline-none'  onChange={(e)=>{hancleChange(e)}}  placeholder='Search here' />
                      </div>
                  
                  
               </div>

               <div className="listOfAllUsers overflow-x-hidden  h-full    overflow-scroll ml-3">
                  {filterUser.map((student,index)=>{
                     
                     return(
                        <>
                          <Link key={student._id} to={`/admin/${student._id}`}>
                            <li onClick={()=>{setSingleUser(student);setShow(!show);dispatch({type:"SingleStudent",payload:student})}} className={singleSelectedStudent._id===student._id?'rounded-xl p-2  mr-2 my-2 bg-red-800 eachStudent cursor-pointer list-none  ':'p-2 rounded-xl mt-1 eachStudent  bg cursor-pointer list-none  mr-2 my-2'}>{student.fullName}</li>
                          </Link>
                        </>
                     )
                  })}
               </div>
         </div>
         <div className="specificUserDetail ">
             
             <Routes>
               <Route path='/' element={<div>Select a user </div>}/>
                <Route path='/addUser/' element={<AddUser fetchData={fetchData} which={true} />}/>
                <Route path='/:id/*' element={<SingleStudentDetail fetchData={fetchData}/>}/>
                
             </Routes>

             
             
         </div>
         
    </div>
  )
}

export default AllStudents
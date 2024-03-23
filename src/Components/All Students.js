import React, { useState } from 'react'

function AllStudents() {

    
    const [show,setShow]=useState(false);
    const [students,setStudents]=useState(["Sohail","Iklakh","Imamuddin","Danish","Farhan","Adnan","Helal","Faisal","Abid","Imran","Arbaz","Abdullah","Farhan","Tabrej"])
    const [value,setValue]=useState("");
    const [filterUser,setFilterUser]=useState(students);
    const [singleUser,setSingleUser]=useState("");
    function hancleChange(e)
    {
        if(e.target.value=="")
          {
            setFilterUser(students);
            return;
          }
          const inputValue=e.target.value.toLowerCase();
          const filterUser=students.filter((student)=>student.toLowerCase().includes(inputValue));
          setFilterUser(filterUser);
          
        }
    return (
    <div className='border-2 AllStudentsMainDiv relative flex  border-emerald-600'>
        {/* For List of users */}
         
         <div className={show?'trasitionHide border-2 h-full   listStudentDiv bg-red-900 border-black ':" bg-red-900 h-full trassitionShow border-2  listStudentDiv border-black "}>
            <div className='absolute showHideBTN top-0  '  onClick={()=>{setShow(!show)}}>{show?">":"<"}</div>
               <div className="searchMainDiv flex  ml-3 border-2   border-pink-300 items-center">
                  <p className='mr-4'>Search By 
                      <select className='border-2 ml-2' name="" id="">
                         <option  value="id" >Id</option>
                         <option  value="name">Name</option>
                      </select>
                  </p>
                  <input type="text"  onChange={(e)=>{hancleChange(e)}}  placeholder='Search here' />
               </div>

               <div className="listOfAllUsers overflow-x-hidden border-2 h-full  border-red-900  overflow-scroll ml-3">
                  {filterUser.map((student,index)=>{
                     return(
                        <>
                          <li onClick={()=>{setSingleUser(student);setShow(!show)}} className='border-2 mt-1 eachStudent cursor-pointer list-none  p-1'>{student}</li>
                        </>
                     )
                  })}
               </div>
         </div>
         <div className="specificUserDetail border-2 border-green-800">
             {singleUser ==""?"Select a user to see detail":<div>Selected user is {singleUser}</div>}
         </div>
         
    </div>
  )
}

export default AllStudents
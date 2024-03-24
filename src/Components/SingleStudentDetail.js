import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

function SingleStudentDetail({id,fetchData}) {
    console.log("Id is ",id);
    const[yes,setYes]=useState(false)
    const navigate=useNavigate();
   async function handleclick()
    {
         try {
            const data=await axios.delete('http://localhost:8000/user/delete',{
                data: { id: id }
            });
            console.log(data.data);
            fetchData();
            navigate('/');
         } catch (error) {
            console.log(error.message);
         }
    }
  return (
    <div>
         {yes && <div>
             <p>Are you sure?</p>
             <button className='border-2 p-2 m-2' onClick={handleclick}>Yes</button>
             <button className='border-2 p-2 m-2' onClick={()=>{setYes(false);console.log("False ",yes)}}>No</button>
         </div>}
         <div className="" onClick={()=>{setYes(true)}}>Delete</div>
    </div>
  )
}

export default SingleStudentDetail
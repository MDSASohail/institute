import React, { useState } from 'react'
import axios from 'axios'
function AddUser({fetchData}) {
        
    const [name,setFullname]=useState("");
    const [fullDetail,setFillDetail]=useState(false);
    const [userId,setUserId]=useState("");
   async function handleClick()
    {
        console.log(name,userId);
        setFillDetail(true);

        try {
                  const data=await axios.post('http://localhost:8000/user/post',{userId:userId,fullName:name});
                  const d=data.data;
                  console.log(d);
                  fetchData();
                  setFullname("");
                  setUserId("");
        } catch (error) {
            console.log(error.message);
            alert("Please enter a unique User Id");
        }
    }
  return (
    <div>
        <div className='flex border-2 justify-center'>
             <strong>User Id</strong>
            {/* <strong className='ml-8'>M01</strong> */}
            <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} placeholder='Enter a unique id' />
            <label htmlFor="fname" className='ml-8'>Full Name</label>
            <input value={name} onChange={(e)=>{setFullname(e.target.value)}} className='ml-8' id='fname' type="text" />
            <button  onClick={handleClick} className='ml-8'>Add</button>
        </div>
        {fullDetail && <div>
            <div>Student Full Detail</div>
        </div>}
    </div>
  )
}

export default AddUser
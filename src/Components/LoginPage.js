import  Axios  from 'axios';
import React, { useContext, useState } from 'react'
import  {Link, useNavigate} from 'react-router-dom'
import { allData } from '../App';
function LoginPage() {

    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState("");
    
     const navigate=useNavigate();
      const {setUser}=useContext(allData);
     
    const clickHangle=async()=>{
          console.log("Fetching Admin")
        //   const user= await Axios.post('http://localhost:8000/admin/get',{username:username,password:password});
            try {
                const user= await Axios.post('http://localhost:8000/admin/get',{username:username,password:password});
                if(user.data.status==false)
                {
                     console.log("False")
                      setError(user.data.payload);
                      return;
                }
                sessionStorage.setItem("adminLogin",JSON.stringify(user.data.data));
                setUser(user.data.data);
                navigate('/admin/')
                
                console.log("Login success ",user.data)
            } catch (error) {
                console.log(error.data);
            }

        // navigate('/user/M01');
    }
  return (
    <>
        <div className=' flex items-center justify-center  flex-col specificBgg'>
            <h1 className='heading '><strong>Admin Login</strong></h1>
            <form >
            
            <div className=' p-4 formDiv formDivCenter '>
                
                <div className=' w-full '>
                    <input type="text" className='text-2xl w-full outline-none inputBorder p-2 rounded-md bg-transparent' placeholder='Enter username' name='username' required onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className='mt-4'>
                    <input type="password" className='text-2xl outline-none inputBorder w-full  p-2 rounded-md bg-transparent' required name="password" id="" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' />
                </div>
                {error && <div>{error}</div>}
                <div className='mt-4'>
                    <input  className='text-2xl inputBorder px-4 py-2   cursor-pointer rounded-lg transition-colors hover:bg-red-800' onClick={()=>{clickHangle()}} type="button" value="Submit" />
                </div>
                
            </div>
            </form>
        </div>

    </>
  )
}

export default LoginPage

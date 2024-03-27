import axios from 'axios';
import  { useState ,useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import {Routes,Route,Link} from 'react-router-dom';
import Marksheet from './Marksheet';
import Certificate from './Certificate';
import Update from './Update'
function SingleStudentDetail({id,fetchData,registrationNo,fullName}) {
    console.log("Id is ",id);
    const[yes,setYes]=useState(false)
    const navigate=useNavigate();

    const [userData,setUserData]=useState(null);

  useEffect(()=>{
                  const getData=async()=>{
                    try {
                         const data=await axios.get(`http://localhost:8000/userDetail/${id}`);
                         const d=data.data;
                         console.log(data.data);
                         setUserData(d);
                    } catch (error) {
                             console.log("Error in fetching detail of user ",error.message);
                    }
                  }

                  getData();
  },[id])


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
    <div className=''>
         {yes && <div className=' yesNo absolute  flex justify-center items-center   '>
             <div className='w-80 text-white rounded-xl flex-col h-80 flex justify-center items-center'>
             <p>Are you sure?</p>
              <div>
              <button className='btn p-2 m-2' onClick={handleclick}>Yes</button>
                <button className='btn p-2 m-2' onClick={()=>{setYes(false);console.log("False ",yes)}}>No</button>
              </div>
             </div>
         </div>}
         <div className='border-2 flex justify-end mr-4 specipicNavbar'>
            <button  className='btn p-2 m-2 ' onClick={()=>{setYes(true)}}>Delete</button>
            <Link to={`update`} >
            <button className='btn p-2 m-2'>Updata</button>
            </Link>
            <Link to={`marksheet`}>
            <button className='btn p-2 m-2'>Markbuttonet</button>
            </Link>
             <Link to={`certificate`}>
             <button className='btn p-2 m-2'>Certificate</button>
             </Link>
             
         </div>
         <div>
            <Routes>
               <Route path='certificate' element={<Certificate id={id} registrationNo={registrationNo} fullName={fullName} userData={userData}/>}/>
               <Route path='marksheet' element={<Marksheet userData={userData}/>}/>
               <Route path='update' element={<Update  id={id} registrationNo={registrationNo} fullName={fullName} userData={userData}/>}/>
               
            </Routes>

           
         </div>

    </div>
  )
}

export default SingleStudentDetail
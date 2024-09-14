import axios from 'axios';
import  { useState ,useEffect, useContext} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import {Routes,Route,Link} from 'react-router-dom';
import Marksheet from './Marksheet';
import Certificate from './Certificate';
import Update from './Update'
import { allData } from '../App';
function SingleStudentDetail({fetchData}) {
    // console.log("In single user Id is ",id);
    const[yes,setYes]=useState(false)
    const navigate=useNavigate();
    const {loginUser}=useContext(allData);
    const [errorDelete,setErrorDelete]=useState(false);
    const [userData,setUserData]=useState(null);
     const {dispatch,singleSelectedStudent}=useContext(allData);
  useEffect(()=>{
                  const getData=async()=>{
                    try {
                         const data=await axios.get(`https://institutenode.vercel.app/userDetail/${singleSelectedStudent._id}`);
                         const d=data.data;
                         dispatch({type:"FullDetail",payload:d});
                        //  console.log("user data got from server is ",data.data);
                         setUserData(d);
                    } catch (error) {
                             console.log("Error in fetching detail of user ",error.message);
                    }
                  }

                  getData();
  },[singleSelectedStudent])


   async function handleclick()
    {
         try {
            const data=await axios.delete('https://institutenode.vercel.app/user/delete',{
                data: { id: singleSelectedStudent._id ,loginUser:loginUser}
            });
            console.log("Deleted data is ",data.data);
            if(!data.data.result)
            {
                      setErrorDelete(data.data.payload);
                      return;
            }
            fetchData();
            navigate('/admin');
         } catch (error) {
            console.log("Error in deleting user",error.message);
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
         {errorDelete && <div className=' yesNo absolute  flex justify-center items-center   '>
             <div className='w-80 text-white rounded-xl flex-col h-80 flex justify-center items-center'>
             <p>Warning</p>
              <div>
                {errorDelete}
              </div>
              <button className='btn p-2 m-2' onClick={()=>{setErrorDelete(false);setYes(false)}}>Ok</button>
             </div>
         </div>}
         <div className='h-14 - sticky top-12  flex justify-end  bg-red-800'>
            <button  className='btn p-2 m-2 ' onClick={()=>{setYes(true)}}>Delete</button>
            <Link to={`update`} >
            <button className='btn p-2 m-2'>Updata</button>
            </Link>
            <Link to={`marksheet`}>
            <button className='btn p-2 m-2'>Marksheet</button>
            </Link>
             <Link to={`certificate`}>
             <button className='btn p-2 m-2'>Certificate</button>
             </Link>
             
         </div>
         <div>
            <Routes>
               <Route path='certificate' element={<Certificate />}/>
               <Route path='marksheet' element={<Marksheet />}/>
               <Route path='update' element={<Update />}/>
               
            </Routes>

           
         </div>

    </div>
  )
}

export default SingleStudentDetail

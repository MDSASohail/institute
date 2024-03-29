import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UserCertificate() {

   
   
   const [singleSelectedStudent,setSingleStudent]=useState(null);
   const [fullDetail,setFullsetail]=useState(null);
  
  const id=useParams();
    console.log(id)
  const d=new Date(fullDetail?.issueDate)
 
  const year=d.getFullYear();
  const month=d.getMonth()+1;
  const day=d.getDate();
  const newDate=`${year}-${month}-${day}`

  useState(()=>{
      const fetchData=async()=>{
            try {
                   const user=await axios.get(`http://localhost:8000/user/${id.id}`)
                   const d=user.data;
                   
                    // console.log("User account is ",d,d._id)
                   const userDetail=await axios.get(`http://localhost:8000/userDetail/${d[0]._id}`);
                    // console.log("User detail is ",userDetail.data);
                    setFullsetail(userDetail.data)
                    setSingleStudent(d[0]);
            } catch (error) {
                console.log("Error in fetching data in userCertificate")
            }
      }
      fetchData();

  },[id])

//   useEffect(()=>{
//      console.log("Change ",fullDetail,singleSelectedStudent)
//   },[singleSelectedStudent,fullDetail])
  
  return (
    <div className="specificBgg">

         <div className=" text-center text-xl py-4 font-bold">This is a valid certificate</div>
          <div className='gridStyle'>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Full Name</strong>
                     <span>{singleSelectedStudent?.fullName}</span>
                 </div>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Father Name</strong>
                     <span>{fullDetail?.fatherName}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Registration No</strong>
                     <span>{singleSelectedStudent?.registrationNo}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Roll No</strong>
                     <span>{fullDetail?.rollNo}</span>
                 </div>
                 

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>
                        From

                     </strong>
                     <span>{fullDetail?.duration  && fullDetail.duration.length>0 ?fullDetail.duration[0]:"Date not available"}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>
                       To

                     </strong>
                     <span>{fullDetail?.duration && fullDetail.duration.length>1?fullDetail.duration[1]:"Date not available"}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Degree</strong>
                     <span>{fullDetail?.degree}</span>
                 </div>

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Center</strong>
                     <span>{fullDetail?.center}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Issue Date</strong>
                   <span>{newDate}</span>
                 </div>
                 
                 
                 </div>
    </div>
  )
}

export default UserCertificate;
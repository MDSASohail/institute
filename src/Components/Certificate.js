import axios from "axios";
import { useEffect, useState } from "react";


function Certificate({id,registrationNo,fullName,userData}) {
//   console.log("Id for certificate is ",id)
  const d=new Date(userData?.issueDate)
  // console.log("Issue date is ",d)
  const year=d.getFullYear();
  const month=d.getMonth()+1;
  const day=d.getDate();
  // console.log("Issue date is ",day,month,year)
  const newDate=`${year}-${month}-${day}`
 
  return (
    <div className="specificBgg">

         <div className=" text-center text-xl py-4 font-bold">This is a valid certificate</div>
          <div className='gridStyle'>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Full Name</strong>
                     <span>{fullName}</span>
                 </div>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Father Name</strong>
                     <span>{userData?.fatherName}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Registration No</strong>
                     <span>{registrationNo}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Roll No</strong>
                     <span>{userData?.rollNo}</span>
                 </div>
                 

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>
                        From

                     </strong>
                     <span>{userData?.duration[0]}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>
                       To

                     </strong>
                     <span>{userData?.duration[1]}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Degree</strong>
                     <span>{userData?.degree}</span>
                 </div>

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Center</strong>
                     <span>{userData?.center}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Issue Date</strong>
                   <span>{newDate}</span>
                 </div>
                 
                 
                 </div>
    </div>
  )
}

export default Certificate;
import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { allData } from "../App";

function Certificate() {

    const {dispatch,singleSelectedStudent,fullDetail}=useContext(allData);
//   console.log("Id for certificate is ",id)
  
  // console.log("Issue date is ",day,month,year)
  const d=new Date(fullDetail?.issueDate)
  // console.log("Issue date is ",d)
  const year=d.getFullYear();
  const month=d.getMonth()+1;
  const day=d.getDate();
  const newDate=`${year}-${month}-${day}`
  
  return (
    <div className="specificBgg">

         <div className=" text-center text-xl py-4 font-bold">This is a valid certificate</div>
          <div className='gridStyle'>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Full Name</strong>
                     <span>{singleSelectedStudent.fullName}</span>
                 </div>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Father Name</strong>
                     <span>{fullDetail?.fatherName}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Registration No</strong>
                     <span>{singleSelectedStudent.registrationNo}</span>
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

export default Certificate;
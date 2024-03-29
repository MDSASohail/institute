import { allData } from "../App";
import { useContext } from "react";
function Marksheet({}) {

    const {dispatch,singleSelectedStudent,fullDetail}=useContext(allData);
//   console.log(singleSelectedStudent)
    console.log("In Marks",singleSelectedStudent,fullDetail)
  const d=new Date(fullDetail?.issueDate)
  // console.log("Issue date is ",d)
  const year=d.getFullYear();
  const month=d.getMonth()+1;
  const day=d.getDate();
  // console.log("Issue date is ",day,month,year)
  const newDate=`${year}-${month}-${day}`

  return (
    <div className="specificBg">

<div className='flex  flex-wrap justify-center'>
             <div className='borderStyle   m-2'>
             <strong>Registration No</strong>
            
             <span className='ml-4 text-xl  p-2 rounded-md'>{singleSelectedStudent.registrationNo}</span>
             </div>
             
            <div className='borderStyle  m-2'>
            <span><strong>fullDetail Name</strong></span>
            <span className='ml-4 text-xl  p-2 rounded-md'>{singleSelectedStudent.fullName}</span>
            
            </div>

            <div className='borderStyle  m-2'>
                     <strong>Degree</strong>
                     <span className='ml-4 text-xl  p-2 rounded-md'>{fullDetail?.degree}</span>
                 </div>

            

   </div>


           <div>
            <div className=' mt-4 text-center text-xl p-2 bg-red-800 text-white'>Student fullDetail Detail</div>

            <div className=' '>
                 <div className='gridStyle'>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Father Name</strong>
                     <span>{fullDetail?.fatherName}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Mother Name</strong>
                     <span>{fullDetail?.motherName}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Roll No</strong>
                     <span>{fullDetail?.rollNo}</span>
                 </div>
                 

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>
                        Grade

                     </strong>
                     <span>{fullDetail?.grade}</span>
                 </div>

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Center</strong>
                     <span>{fullDetail?.center}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Issue Date</strong>
                   <span>{newDate}</span>
                 </div>
                 
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Total Marks</strong>
                    <span>{fullDetail?.totalMarks}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Percentage</strong>
                    <span>{fullDetail?.percentage}</span>
                 </div>
                 </div>
                
                 <div className=' mt-4 text-center text-xl p-2 bg-red-800 text-white'>Course Detail</div>

                 <div>
                   <div className='flex justify-between py-2 px-8'>
                       <strong>Couese Id</strong>
                       <strong>Course Name</strong>
                       <strong>Marks</strong>
                   </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-101</strong>
                        <p >Fire and Safety engineering</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>0?fullDetail.subjects[0].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-102 </strong>
                        <p >Construction Safety</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>1?fullDetail.subjects[1].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-103 </strong>
                        <p >Industrial Safety Management</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>2?fullDetail.subjects[2].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-104 </strong>
                        <p >environmental Safety Management</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>3?fullDetail.subjects[3].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-105 </strong>
                        <p >Deasaster Management</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>4?fullDetail.subjects[4].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-106 </strong>
                        <p >Industrial Safety Legistature</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>5?fullDetail.subjects[5].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-107 </strong>
                        <p >Electrical Safety Management</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>6?fullDetail.subjects[6].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6  flex items-center justify-between '>
                        <strong> DFIS-108 </strong>
                        <p >Industrial Hygiene & occupationa Health</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>7?fullDetail.subjects[7].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2  px-6 flex items-center justify-between'>
                        <strong> DFIS-109 </strong>
                        <p>Chemical And process safety Management</p>
                        <span>{fullDetail?.subjects && fullDetail.subjects.length>8?fullDetail.subjects[8].value:"Marks not available"}</span>
                    </div>
                    
                    

                   
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Marksheet;
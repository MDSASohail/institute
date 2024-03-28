

function Marksheet({id,registrationNo,fullName,userData}) {
  console.log(userData)

  const d=new Date(userData?.issueDate)
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
            
             <span className='ml-4 text-xl  p-2 rounded-md'>{registrationNo}</span>
             </div>
             
            <div className='borderStyle  m-2'>
            <span><strong>Full Name</strong></span>
            <span className='ml-4 text-xl  p-2 rounded-md'>{fullName}</span>
            
            </div>

            <div className='borderStyle  m-2'>
                     <strong>Degree</strong>
                     <span className='ml-4 text-xl  p-2 rounded-md'>{userData?.degree}</span>
                 </div>

            

   </div>


           <div>
            <div className=' mt-4 text-center text-xl p-2 bg-red-800 text-white'>Student Full Detail</div>

            <div className=' '>
                 <div className='gridStyle'>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Father Name</strong>
                     <span>{userData?.fatherName}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Mother Name</strong>
                     <span>{userData?.motherName}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Roll No</strong>
                     <span>{userData?.rollNo}</span>
                 </div>
                 

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>
                        Grade

                     </strong>
                     <span>{userData?.grade}</span>
                 </div>

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Center</strong>
                     <span>{userData?.center}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Issue Date</strong>
                   <span>{newDate}</span>
                 </div>
                 
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Total Marks</strong>
                    <span>{userData?.totalMarks}</span>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Percentage</strong>
                    <span>{userData?.percentage}</span>
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
                        <span>{userData?.subjects && userData.subjects.length>0?userData.subjects[0].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-102 </strong>
                        <p >Construction Safety</p>
                        <span>{userData?.subjects && userData.subjects.length>1?userData.subjects[1].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-103 </strong>
                        <p >Industrial Safety Management</p>
                        <span>{userData?.subjects && userData.subjects.length>2?userData.subjects[2].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-104 </strong>
                        <p >environmental Safety Management</p>
                        <span>{userData?.subjects && userData.subjects.length>3?userData.subjects[3].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-105 </strong>
                        <p >Deasaster Management</p>
                        <span>{userData?.subjects && userData.subjects.length>4?userData.subjects[4].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-106 </strong>
                        <p >Industrial Safety Legistature</p>
                        <span>{userData?.subjects && userData.subjects.length>5?userData.subjects[5].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-107 </strong>
                        <p >Electrical Safety Management</p>
                        <span>{userData?.subjects && userData.subjects.length>6?userData.subjects[6].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2 px-6  flex items-center justify-between '>
                        <strong> DFIS-108 </strong>
                        <p >Industrial Hygiene & occupationa Health</p>
                        <span>{userData?.subjects && userData.subjects.length>7?userData.subjects[7].value:"Marks not available"}</span>
                    </div>
                    <div className=' py-2  px-6 flex items-center justify-between'>
                        <strong> DFIS-109 </strong>
                        <p>Chemical And process safety Management</p>
                        <span>{userData?.subjects && userData.subjects.length>8?userData.subjects[8].value:"Marks not available"}</span>
                    </div>
                    
                    

                   
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Marksheet;
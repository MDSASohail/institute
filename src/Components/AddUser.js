import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { allData } from '../App';
function AddUser({fetchData,data,which}) {
    let w=which;
    
    const [name,setFullname]=useState(data?data.fullName:"");
    const [addedUser,setAddedUser]=useState(data?{_id:data.id}:null);
    const [fullDetail,setFullDetail]=useState(data?true:false);
    const [registrationNo,setRegistrationNo]=useState(data?data.registrationNo:"");
    const [fatherName,setFatherName]=useState(data?data.userData.fatherName:"");
    const [rollNo,setRollNo]=useState(data?data.userData.rollNo:"");
    const [degree,setDegree]=useState(data?data.userData.degree:"");
    const [time,setTime]=useState("");
    const [center,setCenter]=useState(data?data.userData.center:"Siwan");
    const [issueDate,setIssueDate]=useState("");
    const [grade,setGrate]=useState(data?data.userData.grade:"A");
    const [subject,setSubjects]=useState([{id:"DFIS-101", name:"Fire & Safty Engineer"},{id:"DFIS-102",name:"Construction Safty"},{id:"DFIS-103",name:"Industrial Safty Management"},{id:"DFIS-104",name:"Environmental Safery Management"},{id:"DFIS-105",name:"Disaster Management"},{id:"DFIS-106",name:"Industrial Safety Management"},{id:"DFIS-107", name:"Fire & Safty Engineer"},{id:"DFIS-108",name:"Construction Safty"},{id:"DFIS-109",name:"Industrial Safty Management"},{id:"DFIS-110",name:"Environmental Safery Management"},{id:"DFIS-111",name:"Disaster Management"},{id:"DFIS-112",name:"Industrial Safety Management"}]);
    const [curseIds,setCourseIds]=useState([])
    const [enteredC,setEnteredC]=useState([]);
    const [motherName,setMotherName]=useState(data?data.userData.motherName:"");
    const [duration,setDurationDate]=useState([]);
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(null);
    console.log("Data got from parent is ",data)
     const {loginUser}=useContext(allData);
    if(data?.userData==="")
    {
        
        w=!which;
    }
     
   async function handleClick()
    {
            if(registrationNo=="" || name=="")
            {
                 alert("Please enter all the details");
                 return;
            }

            
        
           
        try {
                  const data=await axios.post('https://institutenode.vercel.app/user/post',{registrationNo:registrationNo,fullName:name,loginUser:loginUser});
                  const d=data.data;

                  console.log("User added ",d)
                  if(!d.result)
                  {
                       console.log("Cause of failure",d.payload);
                       setError(d.payload);
                       return;
                       
                  }
                  setAddedUser(d.payload);
                  setFullDetail(true);
                  fetchData();
                  setFullname("");
                  setRegistrationNo("");
                  
        } catch (error) {
            console.log(error.message);
            alert("Please enter a unique User Id");
        }
    }


    async function HandleForm(e)
    {

        e.preventDefault();
        console.log("Center is ",center,duration)

        const formData = new FormData(e.target);
        // const data = {};
        let data=[];
        let totalMarks=0;
        formData.forEach((value, key) => {
            const name=subject.find(item=>item.id==key);
            totalMarks+=parseInt(value);
            // console.log("Name is ",name,key)
        data.push({id:key,value:value,name:name.name})
         });

         let percentage=(totalMarks/1200)*100;

  console.log(data);

           const finalData={duration:duration,center:center,userId:addedUser._id,form:data,fatherName:fatherName,motherName:motherName,percentage:percentage,totalMarks:totalMarks,degree:degree,issueDate:issueDate,grade:grade,rollNo:rollNo}
             console.log("Final data for update or adddetail",finalData)
           try {
                const datauploded=w ? await axios.post('https://institutenode.vercel.app/userDetail/',finalData):await axios.put('http://localhost:8000/userDetail/',finalData);
                  console.log("UserDetail added ",datauploded.data);
                setFullDetail(false);
                setSuccess(true);
                
                
                  
             } catch (error) {
                 console.log("Error in saving the details");
             }
    }
  return (
    <div className='addUserBg'>
        {success && <div className='absolute  flex justify-center items-center fullView'>
             <div>{data?"Updated":"User Added"} Successfully</div>
        </div>}

        {error && <div className=' yesNo absolute  flex justify-center items-center   '>
             <div className='w-80 text-white rounded-xl flex-col h-80 flex justify-center items-center'>
             <p>Warning</p>
              <div>
                {error}
              </div>
              <button className='btn p-2 m-2' onClick={()=>{setError(false)}}>Ok</button>
             </div>
         </div>}
        <div className='flex flex-wrap justify-center'>
             <div className='borderStyle   m-2'>
             <strong>Registration No</strong>
            
             <input className='ml-4 text-xl outline-none p-2 rounded-md' type="text" value={registrationNo} readOnly={data?true:false} onChange={(e)=>{setRegistrationNo(e.target.value)}} placeholder='Enter a registration No.' />
             </div>
            <div className='borderStyle  m-2'>
            <label htmlFor="fname" className='ml-8'><strong>Full Name</strong></label>
            <input placeholder='Enter full name' className="ml-4   text-xl outline-none p-2 rounded-md" value={name} onChange={(e)=>{setFullname(e.target.value)}} readOnly={data?true:false}  id='fname' type="text" />
            
            </div>

            <div className={which ?"block w-full p-2 text-center eachStudent borderStyle   ":"hidden "}>
            <button  onClick={handleClick} className={which ?"block w-full p-2 text-center    ":"hidden "}  ><strong>Add</strong></button>
            </div>

        </div>
        {fullDetail && <div>
            <div className=' mt-4 text-center text-xl p-2 bg-red-800 text-white'>Student Full Detail</div>

            <div className=' '>
                 <div className='gridStyle'>
                 <div className='  py-2 px-6 flex items-center justify-between'>
                     <strong>Father Name</strong>
                     <input className='text-xl p-2 rounded-md outline-none' value={fatherName} required type="text" onChange={(e)=>{setFatherName(e.target.value)}} />
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Mother Name</strong>
                     <input className='text-xl p-2 rounded-md outline-none' value={motherName} required type="text" onChange={(e)=>{setMotherName(e.target.value)}} />
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Roll No</strong>
                     <input className='text-xl p-2 rounded-md outline-none' type="text" value={rollNo} required onChange={(e)=>{setRollNo(e.target.value)}} />
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Degree</strong>
                     <input className='text-xl p-2 rounded-md outline-none' type="text" value={degree} required onChange={(e)=>{setDegree(e.target.value)}} />
                 </div>

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>
                        Grade

                     </strong>
                     <select className='text-xl p-2 rounded-md outline-none' name="" id="" required onChange={(e)=>{setGrate(e.target.value)}}>
                     <option value="A">Select</option>
                         <option value="A">A</option>
                         <option value="B">B</option>
                         <option value="C">C</option>
                     </select>
                 </div>

                 <div className=' py-2 px-6 flex items-center justify-between'>
                     <strong>Center</strong>
                     <select name="" className='text-xl p-2 rounded-md outline-none' id="" required onChange={(e)=>{setCenter(e.target.value)}}>
                         <option value="A">Select</option>
                         <option value="Siwan">Siwan</option>
                         <option value="Mairwa">Mairwa</option>
                         <option value="Delhi">Delhi</option>
                     </select>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Issue Date</strong>
                    <input className='text-xl p-2 rounded-md outline-none' type="date"  required onChange={(e)=>{setIssueDate(e.target.value)}}/>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>Start Date</strong>
                    <input className='text-xl p-2 rounded-md outline-none' type="date" required  onChange={(e)=>{console.log(duration);setDurationDate((p)=>[...p,e.target.value])}}/>
                 </div>
                 <div className=' py-2 px-6 flex items-center justify-between'>
                    <strong>End Date</strong>
                    <input className='text-xl p-2 rounded-md outline-none' type="date" required   onChange={(e)=>{setDurationDate((p)=>[...p,e.target.value])}}/>
                 </div>
                 </div>
                
                

                 <form action="" className='' onSubmit={(e)=>{HandleForm(e)}}>
                   <div className='flex justify-between py-2 px-8'>
                       <strong>Couese Id</strong>
                       <strong>Course Name</strong>
                       <strong>Marks</strong>
                   </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-101</strong>
                        <p >Fire and Safety engineering</p>
                        <input type="number" required  max={100} min={0} name='DFIS-101' />
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-102 </strong>
                        <p >Construction Safety</p>
                        <input type="number" required max={100} min={0} name='DFIS-102' />
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-103 </strong>
                        <p >Industrial Safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-103' />
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-104 </strong>
                        <p >environmental Safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-104' />
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-105 </strong>
                        <p >Deasaster Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-105' />
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-106 </strong>
                        <p >Industrial Safety Legistature</p>
                        <input type="number" required max={100} min={0} name='DFIS-106' />
                    </div>
                    <div className=' py-2 px-6 flex items-center justify-between'>
                        <strong> DFIS-107 </strong>
                        <p >Electrical Safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-107' />
                    </div>
                    <div className=' py-2 px-6  flex items-center justify-between '>
                        <strong> DFIS-108 </strong>
                        <p >Industrial Hygiene & occupationa Health</p>
                        <input type="number" required max={100} min={0} name='DFIS-108' />
                    </div>
                    <div className=' py-2  px-6 flex items-center justify-between'>
                        <strong> DFIS-109 </strong>
                        <p>Chemical And process safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-109' />
                    </div>
                    
                    <div className=' flex justify-center pb-10'>
                      <button value="submit" className='w-40 text-xl rounded-xl transition-colors hover:bg-red-800 hover:text-white  py-2'>Submit</button>
                    </div>

                   
                 </form>
            </div>
        </div>}
    </div>
  )
}

export default AddUser
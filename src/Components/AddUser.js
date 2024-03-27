import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function AddUser({fetchData,data,which}) {
    console.log("In add user ",which);
        
    const [name,setFullname]=useState(data?data.fullName:"");
    const [addedUser,setAddedUser]=useState(data?{_id:data.userData.userId}:null);
    const [fullDetail,setFullDetail]=useState(data?true:false);
    const [registrationNo,setRegistrationNo]=useState(data?data.registrationNo:"");
    const [fatherName,setFatherName]=useState(data?data.userData.fatherName:"");
    const [rollNo,setRollNo]=useState(data?data.userData.rollNo:"");
    const [degree,setDegree]=useState(data?data.userData.degree:"");
    const [time,setTime]=useState("");
    const [center,setCenter]=useState(data?data.userData.center:"");
    const [issueDate,setIssueDate]=useState("");
    const [grade,setGrate]=useState(data?data.userData.grade:"");
    const [subject,setSubjects]=useState([{id:"DFIS-101", name:"Fire & Safty Engineer"},{id:"DFIS-102",name:"Construction Safty"},{id:"DFIS-103",name:"Industrial Safty Management"},{id:"DFIS-104",name:"Environmental Safery Management"},{id:"DFIS-105",name:"Disaster Management"},{id:"DFIS-106",name:"Industrial Safety Management"},{id:"DFIS-107", name:"Fire & Safty Engineer"},{id:"DFIS-108",name:"Construction Safty"},{id:"DFIS-109",name:"Industrial Safty Management"},{id:"DFIS-110",name:"Environmental Safery Management"},{id:"DFIS-111",name:"Disaster Management"},{id:"DFIS-112",name:"Industrial Safety Management"}]);
    const [curseIds,setCourseIds]=useState([])
    const [enteredC,setEnteredC]=useState([]);
    const [motherName,setMotherName]=useState(data?data.userData.motherName:"");
    const [duration,setDurationDate]=useState([]);
    const [success,setSuccess]=useState(false);
    console.log("Data got from parent is ",data)
   async function handleClick()
    {
            if(registrationNo=="" || name=="")
            {
                 alert("Please enter all the details");
                 return;
            }

            
        
           
        try {
                  const data=await axios.post('http://localhost:8000/user/post',{registrationNo:registrationNo,fullName:name});
                  const d=data.data;

                  console.log("User added ",d)
                  setAddedUser(d);
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

           const finalData={duration:duration,center:center,userId:addedUser._id,form:data,fatherName:fatherName,motherName:motherName,percentage:percentage,totalMarks:totalMarks,degree:degree,issueDate:issueDate,grade:"A",rollNo:rollNo}
             console.log("Final data for update or adddetail",finalData)
           try {
                const datauploded=which ? await axios.post('http://localhost:8000/userDetail/',finalData):await axios.put('http://localhost:8000/userDetail/',finalData);
                  console.log("UserDetail added ",datauploded.data);
                setFullDetail(false);
                setSuccess(true);
                // if(fetchData!=undefined)
                // fetchData();
                  
             } catch (error) {
                 console.log("Error in saving the details");
             }
    }
  return (
    <div className='addUserBg'>
        {success && <div className='absolute  flex justify-center items-center fullView'>
             <div>{data?"Updated":"User Added"} Successfully</div>
        </div>}
        <div className='flex border-2 justify-center'>
             <strong>Registration No</strong>
            {/* <strong className='ml-8'>M01</strong> */}
            <input type="text" value={registrationNo} readOnly={data?true:false} onChange={(e)=>{setRegistrationNo(e.target.value)}} placeholder='Enter a unique id' />
            <label htmlFor="fname" className='ml-8'>Full Name</label>
            <input value={name} onChange={(e)=>{setFullname(e.target.value)}} readOnly={data?true:false} className='ml-8' id='fname' type="text" />
            <button  onClick={handleClick} className='ml-8' disabled={data?true:false} >{data?"Block":"Add"}</button>
        </div>
        {fullDetail && <div>
            <div>Student Full Detail</div>

            <div>
                 <div>
                     <strong>Father Name</strong>
                     <input value={fatherName} required type="text" onChange={(e)=>{setFatherName(e.target.value)}} />
                 </div>
                 <div>
                     <strong>Mother Name</strong>
                     <input value={motherName} required type="text" onChange={(e)=>{setMotherName(e.target.value)}} />
                 </div>
                 <div>
                     <strong>Roll No</strong>
                     <input type="text" value={rollNo} required onChange={(e)=>{setRollNo(e.target.value)}} />
                 </div>
                 <div>
                     <strong>Degree</strong>
                     <input type="text" value={degree} required onChange={(e)=>{setDegree(e.target.value)}} />
                 </div>

                 <div>
                     <strong>
                        Grade

                     </strong>
                     <select name="" id="" required onChange={(e)=>{setGrate(e.target.value)}}>
                         <option value="A">A</option>
                         <option value="B">B</option>
                         <option value="C">C</option>
                     </select>
                 </div>

                 <div>
                     <strong>Center</strong>
                     <select name="" id="" required onChange={(e)=>{setCenter(e.target.value)}}>
                         <option value="Siwan">Siwan</option>
                         <option value="Mairwa">Mairwa</option>
                         <option value="Delhi">Delhi</option>
                     </select>
                 </div>
                 <div>
                    <strong>Issue Date</strong>
                    <input type="date"  required onChange={(e)=>{setIssueDate(e.target.value)}}/>
                 </div>
                 <div>
                    <strong>Start Date</strong>
                    <input type="date" required  onChange={(e)=>{console.log(duration);setDurationDate((p)=>[...p,e.target.value])}}/>
                 </div>
                 <div>
                    <strong>End Date</strong>
                    <input type="date" required   onChange={(e)=>{setDurationDate((p)=>[...p,e.target.value])}}/>
                 </div>
                
                

                 <form action="" className='flex flex-wrap' onSubmit={(e)=>{HandleForm(e)}}>
                   
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-101</strong>
                        <p><strong>Course Name </strong>Fire and Safety engineering</p>
                        <input type="number" required  max={100} min={0} name='DFIS-101' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-102 </strong>
                        <p><strong>Course Name </strong>Construction Safety</p>
                        <input type="number" required max={100} min={0} name='DFIS-102' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-103 </strong>
                        <p><strong>Course Name </strong>Industrial Safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-103' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-104 </strong>
                        <p><strong>Course Name </strong>environmental Safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-104' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-105 </strong>
                        <p><strong>Course Name </strong>Deasaster Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-105' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-106 </strong>
                        <p><strong>Course Name </strong>Industrial Safety Legistature</p>
                        <input type="number" required max={100} min={0} name='DFIS-106' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-107 </strong>
                        <p><strong>Course Name </strong>Electrical Safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-107' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-108 </strong>
                        <p><strong>Course Name </strong>Industrial Hygiene & occupationa Health</p>
                        <input type="number" required max={100} min={0} name='DFIS-108' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-109 </strong>
                        <p><strong>Course Name </strong>Chemical And process safety Management</p>
                        <input type="number" required max={100} min={0} name='DFIS-109' />
                    </div>
                    <div className='w-62 border-2 m-2'>
                        <strong>Id DFIS-110 </strong>
                        <p><strong>Course Name </strong>Project Work</p>
                        <input type="number" required max={100} min={0} name='DFIS-110' />
                    </div>
                    <button value="submit">Submit</button>
                 </form>
            </div>
        </div>}
    </div>
  )
}

export default AddUser
import axios from "axios";
import { useEffect, useState } from "react";


function Certificate({id,registrationNo,fullName,userData}) {
  console.log("Id for certificate is ",id)
 
  return (
    <div className="specificBg">
          <div>
             <p>Gujrat Institute of Fire and Industrial Safety Engineer</p>

          </div>
          <p>This is valid certificate</p>

          <div>
             <strong>Name</strong> : 
             <span>{fullName}</span>
          </div>
          <div>
             <strong>Father name</strong>
             <span> : {userData?.fatherName}</span>
          </div>
          <div>
             <strong>Registration No. </strong>
             <span>{registrationNo}</span>
          </div>
          <div>
            <strong>Roll No.</strong>
            <span>{userData?.rollNo}</span>
          </div>
          <div>
            <strong>Degree</strong>
            <span>{userData?.degree}</span>
          </div>

          <div>
            <strong>Grade</strong>
            <span>{userData?.grade}</span>

          </div>
          <div>
            <strong>center</strong>
            <span>{userData?.center}</span>
          </div>

          <div>
             <strong>Issue Date</strong>
             <span>{userData?.issueDate}</span>
          </div>
    </div>
  )
}

export default Certificate;
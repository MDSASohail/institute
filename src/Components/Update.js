import React, { useContext } from 'react'
import AddUser from './AddUser'
import { allData } from '../App';

function Update() {
   const {singleSelectedStudent,fullDetail}=useContext(allData);
    const data={id:singleSelectedStudent._id,registrationNo:singleSelectedStudent.registrationNo,fullName:singleSelectedStudent.fullName,userData:fullDetail};
  return (
    <div className=''>
       
        <AddUser data={data} which={false} />
    </div>
  )
}

export default Update
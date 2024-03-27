import React from 'react'
import AddUser from './AddUser'

function Update({id,registrationNo,fullName,userData}) {
    const data={id:id,registrationNo:registrationNo,fullName:fullName,userData:userData};
  return (
    <div>
       <div>Update the data</div>
        <AddUser data={data} which={false} />
    </div>
  )
}

export default Update


function Marksheet({userData}) {
  console.log(userData)
  return (
    <div>{userData.rollNo}
       <div><strong>Father Name is </strong> {userData.fatherName}</div>
    </div>
  )
}

export default Marksheet;
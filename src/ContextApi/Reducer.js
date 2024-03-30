

function Reducer(data,action) {
    console.log("Action is ",action,data)
  switch(action.type)
  {
      case "AllStudents":
        return {allStudents:action.payload,singleSelectedStudent:data.singleSelectedStudent,fullDetail:data.fullDetail,dispatch:data.dispatch,setUser:data.setUser,loginUser:data.loginUser};
      case "SingleStudent":
        return {allStudents:data.allStudents,singleSelectedStudent:action.payload,fullDetail:data.fullDetail,dispatch:data.dispatch,setUser:data.setUser,loginUser:data.loginUser};
      case "FullDetail":
        return {allStudents:data.allStudents,singleSelectedStudent:data.singleSelectedStudent,fullDetail:action.payload,dispatch:data.dispatch,setUser:data.setUser,loginUser:data.loginUser};
      default :
       return data;
  }

}

export default Reducer
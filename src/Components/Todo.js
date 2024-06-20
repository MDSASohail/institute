import React, { useState } from 'react'

export default function Todo() {
    const [allList,setAllList]=useState([]);
    const [current,setCurrent]=useState("");
    let todelete="";
    function handleDelete()
    {
        const s=allList.filter((list,index)=>index!=todelete);
          setAllList(s);
          todelete="";
    }
    function handle()
    {
        console.log("In handle")
          setAllList(item=>[...item,current]);
          setCurrent("");
    }
  return (
    <div>
       
      <input type="text" value={current} onChange={(e)=>{setCurrent(e.target.value)}} />

      <button onClick={handle}>Add</button>
      <div>
        {allList.map((item,index)=><li onClick={()=>{todelete=index}} key={index}>{item}</li>)}
        </div>

        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

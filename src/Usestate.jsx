import React, {useState} from 'react'

function Usestate() {
    const [data,setData] = useState(0)
    const myfun=()=>{
        setData("blue")
    }

  return (
    <div>
        <h1>Number is:{data}</h1>
        <button onClick={myfun}>click</button>
    </div>
  )
}

export default Usestate
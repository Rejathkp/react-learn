import React, { useState } from 'react'

function Ternary3() {
    const [data,setdata] = useState(true)
    const myfun=()=>{
        setdata(!data)
    }
  return (
    <div>
        <h2>{data?' ':"Visible data"}</h2>
        <button onClick={myfun}>{data?'Show':'Hide'}</button>
    </div>
  )
}

export default Ternary3
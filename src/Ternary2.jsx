import React, { useState } from 'react'

import "./Ternary2.css"

function Ternary2() {
    const [data,setData] = useState(true)
    const functn=()=>{
        setData(!data)
    }
  return (
    <div>
        <button className={data?'btnn1':'bttn2'} onClick={functn}>{data?'Show':'hide'}</button>
    </div>
  )
}

export default Ternary2
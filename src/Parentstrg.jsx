import React, { useState } from 'react'
import Childstrg from './Childstrg'

function Parentstrg() {
    const [data,setData] = useState("Hello World")
    
  return (
    <div>
        <Childstrg string={data} />
    </div>
  )
}

export default Parentstrg
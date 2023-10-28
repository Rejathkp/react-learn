import React, { useState } from 'react'
import "./Usstandter.css"

function Usstandter() {
    const [data,setData] = useState(false)
    const functn=()=>{
        setData(!data)
    }
  return (
    <div>
      {data?" ":<button className='vertical-center' onClick={functn}>Show Image</button>}
        {data&&<><img src="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"/>
        <button className='top'  onClick={functn}>x</button></>}
        
          
        
        

    </div>
  )
}

export default Usstandter
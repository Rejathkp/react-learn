import React, { useState } from 'react'

function Ternaryimg() {
    const [data,setData] = useState(false)
    const functn=()=>{
        setData(!data)
    }
  return (
    <div>
        <button onClick={functn}>Show Image</button><br />
        {/* {data&&<><h1>hello</h1><h2>world</h2></>} */}
        {data&&<><button onClick={functn}>x</button><img src="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"/></>}
    </div>
  )
}

export default Ternaryimg
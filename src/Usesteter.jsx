import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Usesteter() {
    const no=10
    const [data,setdata] = useState(true)
    const myfunc=() => {
        setdata(!data)
    }
  return (
    <div>
        {no > 0 ? <h1>positive</h1>: no<0?<h1>negative</h1>:<h1>zero</h1>}
        {data?<Button onClick={myfunc}>Show</Button>:<Button onClick={myfunc}>Hide</Button>}
    </div>
  )
}

export default Usesteter
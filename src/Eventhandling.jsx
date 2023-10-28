import React, { useState } from 'react'

function Eventhandling() {
    const [first, setfirst] = useState()
    const [second, setsecond] = useState()
    const [third, setthird] = useState()

   

    const myfunc=(a)=>{
        console.log(a)
        console.log(a.target.value);
        setsecond(a.target.value)
        }

    const myfunct=(b)=>{
        // console.log(b)
        // console.log(b.target.value);
        setthird(b.target.value)
        }

  return (
    <div>
        Name
        <input type="text" onChange={(e)=>setfirst(e.target.value)} />
        <h1>{first}</h1>
        Age
        <input type="text" onChange={myfunc} />
        <h1>{second}</h1> 
        Roll no
        <input type="text" onChange={myfunct} />
        <h1>{third}</h1>
    </div>
  )
}

export default Eventhandling
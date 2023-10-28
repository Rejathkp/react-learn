import React, {useEffect, useState} from 'react'


function Useeffect() {
    useEffect(() => {
      console.log("USe effect");
      alert("hello ")
    
      
    }, )
    const [first,setfirst]= useState(0)
    
  return (
    <div className='text-center'>
        <h1>{first}</h1>
        <button onClick={()=> setfirst(first + 1)}>+</button>
        <button onClick={()=> setfirst (first- 1)}>-</button>

    </div>
  )
}

export default Useeffect
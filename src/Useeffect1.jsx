import React, { useEffect, useState } from 'react'

function Useeffect1() {
    const [num, setnum] = useState(0)
    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(0)

    useEffect(() => {
      console.log("Use effect second")
    
      
    },[num2] )
    
  return (
    <div className='text-center'>
        
        <button onClick={()=>setnum(num+1)}>+1={num}</button><br />
        <button onClick={()=>setnum1(num1+2)}>+2={num1}</button><br />
        <button onClick={()=>setnum2(num2+3)}>+3={num2}</button>

    </div>
  )
}

export default Useeffect1
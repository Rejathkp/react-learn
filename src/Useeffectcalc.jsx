import React, { useState, useEffect } from 'react'


function Useeffectcalc() {
    const [count,setcount]= useState(2);
    const [calc,setcalc]= useState(1);

    useEffect(()=>{
        setcalc(count * 2);
        console.log(calc);
    })
  return (
    <div>
        <h1>count={count}</h1>
        <button onClick={()=>setcount(count+1)}>Change</button>
        <h2>Calc={calc}</h2>
    </div>
  )
}

export default Useeffectcalc
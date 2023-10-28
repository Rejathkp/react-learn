import React from 'react'
import { Button } from 'react-bootstrap'

function Clickfn() {
    const clcking = ()=>{
        console.log("hello world")
        alert("hi guys")
    }
    const hovr = ()=>{
        alert("Hovering")
    }
    const multply =(a)=>{
        alert(a*a*a)
    }
    
  return (
    <div>
        <Button onClick={clcking}>Click me</Button>
        <h3 onDoubleClick={clcking}>How do you do</h3>
        <input type='text'onChange={clcking}/>
        {/* <h4 onMouseOver={hovr}>MouseHovering</h4> */}
        <Button onClick={()=>multply(5)}>Result</Button>
        
    </div>
  )
}

export default Clickfn
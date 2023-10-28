import React, {useState} from 'react'

function Useste() {
    const [data,setData] = useState(0)
    const myfunc=()=>{
        setData(data+1)
    }
    const decrse=()=>{
        
        if(data<=0)
            alert("Invalid")
        else
            setData(data-1)      
            
    }
    
  return (
    <div>
        <h1>Number is:{data}</h1>
        <button onClick={myfunc}>increment</button>
        <button onClick={decrse}>Decreament</button>
        
    </div>
  )
}

export default Useste
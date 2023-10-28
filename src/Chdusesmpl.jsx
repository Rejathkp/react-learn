import React from 'react'

function Chdusesmpl({data,data1,data2,data3}) {
    console.log(data,data1,data2,data3);
  return (
    
    <div>
        <h4>{data}</h4>
        <h4>{data1}</h4>
        <h4>{data2.name}</h4>
        <h4>{data2.class}</h4>
        <h4>{data2.Roll}</h4>
    
        {data3.map((j) =>  
        <div>
    
            <h4>{j.car}</h4>
            <h4>{j.price}</h4>
            <h4>{j.colour}</h4>
        </div> )}
        
    </div>
    
  )
}

export default Chdusesmpl
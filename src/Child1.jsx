import React from 'react'

function Child1({datas}) {
    console.log(datas)
  return (
    <div>
    {datas.map((i)=>
    <div>
        <h4>Car:{i.car}</h4>
        <h4>Price:{i.price}</h4>
        
    </div>)}
    
    </div>
  )
}

export default Child1
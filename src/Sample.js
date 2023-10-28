import React from 'react'

function Sample() {
    let ar= ['rahul','tejas']
    
  return (
    ar.map((i)=>
    <div>
        <h4>{i}</h4>
    </div>)
  )

}

export default Sample
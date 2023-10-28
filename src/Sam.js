import React from 'react'

function Sam() {
    let nme=['sourav','manu','uvais']
  return (
    nme.map((i)=>
    <div>
        <h2>{i}</h2>
    </div>
  )
)}

export default Sam
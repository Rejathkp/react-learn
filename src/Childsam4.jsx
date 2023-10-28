import React from 'react'

function Childsam4({cars}) {
    console.log(cars);
  return (
    cars.map((i) =>
    <div>
        <h2>{i.car}</h2>
        <h2>{i.price}</h2>
        <h2>{i.colour}</h2>
        
    </div>
  ))
}

export default Childsam4 
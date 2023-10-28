import React from 'react'

function Child(prop) {

    console.log(prop)
  return (
    <div>
        <h2>State:{prop.name}</h2>
        <h2>Language:{prop.language}</h2>
        <h2>Population:{prop.population}</h2>
        <h3>{prop.nwdata.value}</h3>
        <h3>{prop.nwdata.add}</h3>
    </div>
  )
}
 
export default Child
import React from 'react'

function Chld({fruits,student}) {
    console.log(student)
    console.log(fruits);
  return (
    <div>
    {fruits.map((i)=>
    
        <div>
            <h2>{student.name}</h2>
            <h2>{student.class}</h2>
            <h2>{student.age}</h2>
            <h4>{i.fruit}</h4>
            <h4>{i.weight}</h4>
            <h4>{i.price}</h4>
        </div>
        
        
        )}

    </div>
    
  )
}

export default Chld
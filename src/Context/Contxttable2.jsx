import React, {useContext} from 'react'
import {NewwContext} from './App3'


function Contxttable2() {
    const {student}=useContext(NewwContext)
    console.log(student); 
  return (
    <div>
        <table style={{border:'1px solid black',marginTop:'300px',marginLeft:'650px'}}>
        <thead>
            <tr >
            <td style={{border: '1px solid black', padding: '8px',fontWeight:'700'}}>Name</td>
            <td style={{border: '1px solid black', padding: '8px',fontWeight:'700'}}>Course</td>
            <td style={{border: '1px solid black', padding: '8px',fontWeight:'700'}}>Age</td>
            </tr>
          </thead>
      <tbody>
        {student.map((item)=>(
          
        <tr>
          
          <td style={{border: '1px solid black', padding: '8px'}}>{item.name}</td>
          <td style={{border: '1px solid black', padding: '8px'}}>{item.course}</td>
          <td style={{border: '1px solid black', padding: '8px'}}>{item.age}</td>
        </tr>
        ))}
        
      </tbody>
    </table>
    </div>
  )
}

export default Contxttable2
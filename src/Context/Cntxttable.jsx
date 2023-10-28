import React, {useContext} from 'react'
import {NewContext} from './App1'

function Cntxttable() {
    const {ary}=useContext(NewContext)
    console.log(ary); 
  return (
    <div>
        <table style={{border:'1px solid black',marginTop:'300px',marginLeft:'650px'}}>
        <thead>
            <tr >
            <td style={{border: '1px solid black', padding: '8px',fontWeight:'700'}}>Name</td>
            <td style={{border: '1px solid black', padding: '8px',fontWeight:'700'}}>Class</td>
            <td style={{border: '1px solid black', padding: '8px',fontWeight:'700'}}>Roll</td>
            </tr>
          </thead>
      <tbody>
        {ary.map((item)=>(
          
        <tr>
          
          <td style={{border: '1px solid black', padding: '8px'}}>{item.name}</td>
          <td style={{border: '1px solid black', padding: '8px'}}>{item.class}</td>
          <td style={{border: '1px solid black', padding: '8px'}}>{item.roll}</td>
        </tr>
        ))}
        
      </tbody>
    </table>
    </div>
  )
}

export default Cntxttable
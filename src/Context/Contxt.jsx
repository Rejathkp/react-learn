import React, {useContext} from 'react'
import {NewContext} from './App1'


function Contxt() {
    const {ary,obj,name}=useContext(NewContext)
    console.log(name);
    console.log(obj); 
  return (
    <div>
      
    </div>
  )
} 

export default Contxt
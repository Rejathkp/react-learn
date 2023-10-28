import React from 'react'
import Chld from './Chld'

function Parent1() {
    const datta= {name:'kiran',class:'7th',age:'16'}
    const dataa=[{fruit:'apple',weight:'2kg',price:'120'},
                {fruit:'orange',weight:'3kg',price:'150'},
                {fruit:'jackfruit',weight:'1kg',price:'80'}]
  return (
    <div>
        <Chld student={datta} fruits={dataa}/>
        
    </div>
  )
}

export default Parent1
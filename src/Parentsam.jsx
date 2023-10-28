import React from 'react'
import Childsam1 from './Childsam1'
import Childsam2 from './Childsam2'
import Childsam3 from './Childsam3'
import Childsam4 from './Childsam4'
import Childsam5 from './Childsam5'

function Parentsam() {
    const name="Ajith"
    const num= 25
    const obj={name:"Adi",class:"10th",Roll:5}
    const array=[{car:'BMW',price:"30lakhs",colour:'White'},
    {car:'Benz',price:"40lakhs",colour:'Black'},
    {car:'Ford',price:"20lakhs",colour:'Grey'}]
  return (
    <div>
        <Childsam1 nme={name} />
        <Childsam2 number={num} /> 
        <Childsam3 objct={obj} />
        <Childsam4 cars={array} />
        <Childsam5 data={name} data1={num} data2={obj} data3={array} />
    </div>
  )
}

export default Parentsam
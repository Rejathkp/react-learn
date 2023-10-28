import React, { useState } from 'react'
import Chdusesmpl from './Chdusesmpl'
import Chdusesmpl2 from './Chdusesmpl2'


function Prntusesmpl() {
    const [name,setName] = useState("AJithu")
    const [num,setNum] = useState(25)
    const [obj,setObj] = useState({name:"Adi",class:"10th",Roll:5})
    const [ary,setAry] = useState([{car:'BMW',price:"30lakhs",colour:'White'},
                                        {car:'Benz',price:"40lakhs",colour:'Black'},
                                        {car:'Ford',price:"20lakhs",colour:'Grey'}])
    
  return (
    <div>
       <Chdusesmpl data={name} data1={num} data2={obj} data3={ary} />
       <Chdusesmpl2 data={name} setdata={setName} />
    </div>
  )
}

export default Prntusesmpl
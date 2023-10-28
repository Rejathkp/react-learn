import React from 'react'

function Spreadop() {
    const ar1=[1,2,3,4]
    const ar2=[5,6,7,8]
    const ar3=[
        {name:'rakesh',class:'10th',roll:"37",},
        {name:'tulsi',class:'7th',roll:"45",},
        {name:'hari',class:'12th',roll:"22",}
    ]
    const obj= {name:'rakesh',class:'10th',roll:"37"}
    console.log(obj)
    console.log("First array: ",...ar1)
    console.log("Second array: ",...ar2)
    const newar=[...ar1,...ar2]
    console.log("new array: ",newar)

  return (
    <div>
    <h1> Array</h1>
    {ar3.map((i)=>
    <div>
       
        <h3>{i.name}</h3>
        <h3>{i.class}</h3>
        <h3>{i.roll}</h3>
    </div>
    
    )}
    <h2>Object</h2>
    <h3>{obj.name}</h3>
    <h3>{obj.class}</h3>
    <h3>{obj.roll}</h3>
    </div>
  )
}

export default Spreadop
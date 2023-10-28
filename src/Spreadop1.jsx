import React from 'react'

function Spreadop1() {
    const ar1=['apple','orange','banana']
    const ar2=['jackfruit','pappaya']
    console.log('fruits:',...ar1);
    console.log('additon:',...ar2);
    const newar=[...ar1,...ar2];
    console.log('new array:',newar);
    const ar3=[
        {name:'rakesh',class:'10th',roll:"37"},
        {name:'tulsi',class:'7th',roll:"45"},
        {name:'hari',class:'12th',roll:"22"}
    ]

    const val={name:'haritha',class:'12th',roll:"22"}

    // console.log('students:',...ar3)
    // console.log('extra:',...obj)
    // const neww=[ar3,...obj];
    const neww = [val,...ar3]

    console.log(neww);

  return (
    <div>

    </div>
  )
}

export default Spreadop1
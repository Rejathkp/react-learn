import React, {useState} from 'react'

function Usesteary() {
    const [data,setData] = useState([
        {name:'Tendulkar',age:'50'},
        {name:'Sonia',age:'33'},
        {name:'Lakshye',age:'19'},
        {name:'Dhanya',age:'27'},
    ])
    console.log(data)
  return (
    <div>Usesteary
        {data.map((i)=>
        <>
        <h1>{i.name}</h1>
        <h1>{i.age}</h1>
        </>
        )}
    </div>
  )
}

export default Usesteary
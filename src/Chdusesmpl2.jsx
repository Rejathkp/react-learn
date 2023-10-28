import React from 'react'

function Chdusesmpl2({data,setdata}) {
    console.log(data)
    const myfun=() =>
        setdata("adithya")
  return (

    <div>
        <button onClick={myfun}>Change</button>
        <h2>{data}</h2>
    </div>
  )
}

export default Chdusesmpl2
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Apisample() {
  const [value, setvalue] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res)=>setvalue(res.data))
  }, [value])
   
  
  return (
    <div>
        {value.map((i)=>
        <>
          <li>{i.id}</li><br />
          <li>{i.title}</li>
          </>
        )}
    </div>
  )
}

export default Apisample
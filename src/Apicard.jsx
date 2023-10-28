import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card,Button } from 'react-bootstrap'

function Apicard() {
    const [value, setvalue] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((samp)=>setvalue(samp.data))
    }, [value])
  return (
    <div> 
        
        <Card style={{ width: '18rem' }}>
        {value.map((i)=>
        <>
      <Card.Img variant="top" src={i.image} />
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text>
          {i.description}<br/>
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </>
        )}
    </Card>
    
   
    </div>
  )
}

export default Apicard
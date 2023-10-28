import React from 'react'
import { Card } from 'react-bootstrap'

function Dobleclick({Munnar,Gavi,munnar}) {
  console.log(Munnar);
  console.log(Gavi);
  const myfun=()=>{
    munnar(Gavi)
  }
  const fun=()=>{
    
  }

  return (
    <>
    <div>
      
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Munnar.imgu} />
      <Card.Body>
        <Card.Title>{Munnar.name}</Card.Title>
        <Card.Text>{Munnar.details}</Card.Text>
      </Card.Body>
    </Card>
     
    </div>
    <button onClick={myfun}>Change it</button>
    </>
  )
}

export default Dobleclick
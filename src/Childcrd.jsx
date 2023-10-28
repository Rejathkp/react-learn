import React from 'react'
import { Card } from 'react-bootstrap';
import "./Childcrd.css";

function Childcrd({fruits,vegetables,frts}) {

    console.log(fruits);
    console.log(vegetables);
    const myfunct=() =>{
      frts(vegetables)
    }
  return (
    <>
    <div className="card-container">
      
        {(fruits).map((i)=>
        <Card>
      <Card.Img variant='image' src={i.img} />
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <Card.Text>
          {i.weight}<br></br>{i.price}
        </Card.Text>
        
      </Card.Body>
    </Card>
    )}
    
    
    </div>
    <button onClick={myfunct}>Change it</button>
    </>
    
  )
}

export default Childcrd
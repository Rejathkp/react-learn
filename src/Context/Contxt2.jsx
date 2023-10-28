import React, {useContext} from 'react'
import {SampleContext} from './App2'
import { Card } from 'react-bootstrap';

function Contxt2() {
    const {ary,strng,objt}=useContext(SampleContext)
    console.log(ary);
    console.log(strng);
    console.log(objt);
  return (
    <div>
        {ary.map((item)=>(
        <Card style={{ width: '18rem' }}>
            
      <Card.Img variant="top" src="holder.js/100px180" /> 
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Class: {item.class} <br />{' '}
          roll: {item.roll}
        </Card.Text>
      </Card.Body>
      
    </Card>
    ))}
    <h3>String:</h3>
    {strng}
    <h3>Object:</h3>
    {objt.name}<br/>
    {objt.ig}
    </div>
  )
}

export default Contxt2
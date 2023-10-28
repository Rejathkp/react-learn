import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'

function Usestecrd() {
    const [data,setData] = useState("Click to complete")
    const [btnclr,setBtnclr] = useState("blue")
    const func=() => {
        if (data==="Click to complete"){
            setData("Yes.. I have completed")
            setBtnclr("green")
          }
        else
            {
              setData("Click to complete")
            setBtnclr("blue")  
            }
    }
    
      
  return (
    <div>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="sides" src="https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  onClick={func} style={{ backgroundColor: btnclr}}>{data}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Usestecrd
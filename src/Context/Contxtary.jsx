import React, { useContext } from "react";
import { SampleContext } from "./App2";
import { Card } from "react-bootstrap";
  
function Contxtary() {
  const { neww } = useContext(SampleContext);

  return (
    <div>
      {neww.map((itm) => ( 
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{itm.name}</Card.Title>
            <Card.Text>
              Place: {itm.place} <br /> Age: {itm.age}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Contxtary;

import React, {useState} from 'react'
import { Card,Button } from 'react-bootstrap'

function Usestatecrd() {
    const [data,setData] = useState([
        {name:'carrot',weight:'1kg',price:'Rs 100',img:'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg'},
        {name:'cabbage',weight:'1.5kg',price:'Rs 150',img:'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/09/Benefits-Of-Cabbage-589153824-770x533-1-650x428.jpg'},
        {name:'onion',weight:'0.6',price:'Rs 70',img:'https://static.toiimg.com/thumb/msid-92775530,width-1070,height-580,imgsize-147380,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'},
        {name:'tomato',weight:'1kg',price:'Rs 60',img:'https://cdn.britannica.com/16/187216-131-FB186228/tomatoes-tomato-plant-Fruit-vegetable.jpg'},
    ])
    const [btn,setBtn] = useState("blue")
    const [wrd,setWrd] = useState("Go to Cart")
    const functn=() => {
      if (wrd==="Go to Cart"){
          setWrd("Going to Cart...")
          setBtn("grey")
        }
      else
          {
            setWrd("Go to Cart")
            setBtn("blue")  
          }
  }

  return (
    <div>
        <div style={{display: 'flex',justifyContent:"space-between"}}>
          {data.map( (i)=>
        <>
        <Card style={{ width: '25rem' }}>
          
          <Card.Img
            variant="up"
            Img src={i.img}
            style={{width:'100%', height:'250px'}}
          />
          <Card.Body>
            <Card.Title>{i.name}</Card.Title>
            <Card.Text>
              weight: {i.weight}{' '}<br></br>
              price: {i.price}
            </Card.Text>
            <Button onClick={functn} style={{background:btn}}>{wrd}</Button>
          </Card.Body>
          
        </Card>
        </>
        )}
        </div>
    </div>
  )
}

export default Usestatecrd
import React, {useState} from 'react'
import { Table } from 'react-bootstrap'

function Usestetable() {
    const [data,setData] = useState([
        {num:1,name:'apple',weight:'1kg',price:'Rs 100',img:"https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg"},
        {num:2,name:'orange',weight:'1.5kg',price:'Rs 150',img:"https://img.theculturetrip.com/wp-content/uploads/2018/03/origins-of-the-word-orange.jpg"},
        {num:3,name:'grapes',weight:'0.6',price:'Rs 70',img:"https://smartyield.in/wp-content/uploads/2021/06/Green-grape.png"},
        {num:4,name:'banana',weight:'1kg',price:'Rs 60',img:"https://cdn.shopify.com/s/files/1/0258/4307/3103/products/asset_2_1024x.jpg?v=1571839043"},
    ])
  return (
    <div>
        
        
        <Table striped bordered hover>
        {data.map((i)=>
        <>
        
      <tbody>
        <tr>
        
          <td>{i.num}</td>
          <td>{i.name}</td>
          <td>{i.weight}</td>
          <td>{i.price}</td>
          <td><img src={i.img} width="65px" height="65px"/></td> 
          
        </tr>
        
      </tbody>
      </> 
      )}
    </Table>
    
    
  
    </div>
  )
}

export default Usestetable
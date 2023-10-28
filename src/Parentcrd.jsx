import React, { useState } from "react";
import Childcrd from "./Childcrd";

function Parentcrd() {
  const [fruit,setFruit] = useState([
    {
      name: "apple",
      weight: "1kg",
      price: "100rs",
      img: "https://5.imimg.com/data5/WS/GW/FG/SELLER-62386301/apple-1--500x500.jpeg",
    },
    {
      name: "orange",
      weight: "2kg",
      price: "150rs",
      img: "https://img.theculturetrip.com/wp-content/uploads/2018/03/origins-of-the-word-orange.jpg",
    },
    {
      name: "watermelon",
      weight: "3kg",
      price: "250rs",
      img: "https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg",
    },
    {
      name: "jackfruit",
      weight: "700g",
      price: "90rs",
      img: "https://post.healthline.com/wp-content/uploads/2022/03/jackfruit-tree-1200x628-facebook-1200x628.jpg",
    },
  ]);
  const [vegetable,setVegetable] = useState([
    {
      name: "tomato",
      weight: "1.5kg",
      price: "90rs",
      img: "https://post.healthline.com/wp-content/uploads/2019/10/Tomato_1200x628-facebook.jpg",
    },
    {
      name: "potato",
      weight: "1kg",
      price: "60rs",
      img: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg",
    },
    {
      name: "Onion",
      weight: "0.5kg",
      price: "50rs",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG",
    },
    {
      name: "Carrot",
      weight: "2kg",
      price: "130rs", 
      img: "https://m.media-amazon.com/images/I/71S6oQqVa5L.jpg",
    },
  ]);
  
  return (
    <div>
      <Childcrd fruits={fruit} vegetables={vegetable} frts={setFruit}/>
    </div>
  );
}

export default Parentcrd;

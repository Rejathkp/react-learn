import React, { useState } from 'react'
import Dobleclick from './Dobleclick'

function Dobleclickparent() {
    const [first, setfirst] = useState({
        name:"Munnar",
        details:"Munnar is a town in the Western Ghats mountain range in Kerala . A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century.",
        imgu:"https://static.toiimg.com/photo/msid-85515152,width-96,height-65.cms"
    })
    const [second, setsecond] = useState({
        name:"Gavi",
        details:'Gavi is a village in Pathanamthitta district, Kerala, India.The nearest railway station is Chengannur. It is located 28 km southwest of Vandiperiyar, a town in Idukki on N.H 220, the highway connecting Kollam and Madurai. ',
        imgu:"https://i.pinimg.com/originals/1d/be/3d/1dbe3d74cb40bb5921c0c8a29ea4eb04.jpg"
    })
  return (
    <div>
        <Dobleclick Munnar={first} Gavi={second} munnar={setfirst}/>
        {/* <h1>{first.name}</h1> */}
    </div>
  )
}

export default Dobleclickparent
import React, { useState } from 'react'

function Evnthand() {
    const [data,setdata]=useState({})

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdata({...data,[name]:value})
    }
    console.log(data);

  return (
    <div>
        <form >
            <label>Name:</label>
            <input type="text" name='username' value={data.username} onChange={handleChange} /><br />
            <label>Age:</label>
            <input type="text" name='age' value={data.age} onChange={handleChange} /><br />
            <button>Submit</button><br />
            {data.username}<br></br>
            {data.age}
            
        </form>
    </div>
  )
}

export default Evnthand
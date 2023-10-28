import React, { useState } from "react";

function Usestclr() {
  const [data, setData] = useState("Blue");
  const [clr, setClr] = useState("Red");
  const [value,setValue] = useState("Hello")
  const myfunt = () => {
    setData("Green");
    setClr("White");
    setValue("World")
  };

  return (
    <div>
      <h1 style={{ color: data }}>{value}</h1>
      <button onClick={myfunt} style={{ backgroundColor: data, color: clr }}>
        Change
      </button>
    </div>
  );
}

export default Usestclr;

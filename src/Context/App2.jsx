import React, { useState } from "react";
import { createContext } from "react";
import Contxt2 from "./Contxt2";
import arry from "./Arry";
import Contxtary from "./Contxtary";

const SampleContext = createContext();

function App2() {
 
    console.log(arry);

  const [ary, setary] = useState(
    [
      { name: "Swaroop", class: "10th", roll: "36" },
      { name: "Mohammaed", class: "9th", roll: "29" },
    ]
  );
  const [strng, setstrng] = useState("Hello world")
  const [objt, setobjt] = useState({ name: "Apple", ig: "fruit" })
  const [neww,setneww] = useState(arry)
  return(
   <div>
        <SampleContext.Provider value={{ary,strng,objt,neww}}>
            {/* <Contxt2/> */}
            <Contxtary/>
            
            
        </SampleContext.Provider>
        
   </div>
   )
}

export default App2;
export {SampleContext}

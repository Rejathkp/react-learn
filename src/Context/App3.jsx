import React, { useState } from "react";
import { createContext } from "react";
import crse from "./Arry2";
import Contxttable2 from "./Contxttable2";

const NewwContext = createContext();

function App3() {
 
    console.log(crse);

    const [student,setStudent] = useState(crse)
    return(
        <div>
             <NewwContext.Provider value={{student}}>
                <Contxttable2/>
                 
             </NewwContext.Provider>
             
        </div>
        )
     }
     
     export default App3;
     export {NewwContext}
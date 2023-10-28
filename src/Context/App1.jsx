import React from 'react'
import { createContext } from 'react'
import Contxt from './Contxt';
import Cntxttable from './Cntxttable';
 
const NewContext=createContext();

function App1() {
    const ary=[{name:'Swaroop',class:"10th",roll:"36"},{name:'Mohammaed',class:"9th",roll:"29"}]
    const obj={name:'Apple',ig:"fruit"}
    const name='sai'


  return (
    <div>
        <NewContext.Provider value={{ary,obj,name}}>
        {/* <Contxt/> */}
        <Cntxttable/>

        </NewContext.Provider>
    </div>
  )
}

export default App1
export {NewContext}
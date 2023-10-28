import React from 'react'
import Child from './Child'
import Child1 from './Child1'

function Parent() {
    const data='kerala'
    const newarr= [{car:'maruthi',price:'5lakh'},
                   {car:'ford',price:'10lakh'},
                   {car:'renault',price:'7lakh'}]
    const newdata={value:'hello',add:'world'}
  return (
    <div>
        {/* <Child name={data} language={'malayalam'} population={'2000'}/>
        <Child name={'Tamilnadu'} language={'tamil'} population={'3000'}/>
        <Child name={'mumbai'} language={'hindi'} population={'5000'}/> */}
        <Child nwdata={newdata}/>

        <Child1 datas={newarr}/>
    </div>
  )
}

export default Parent
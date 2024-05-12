import React, { useState } from 'react'

const Counter = () => {
    let [counter,setCounter] = useState(1);

    const addValue = ()=>{
        if(counter<20){
            counter = counter+1
            console.log(counter)
        }
        setCounter(counter)
    }
    const removeValue = ()=>{
        if(counter>0){
            setCounter(counter-1)
            console.log(counter)
        }
    }
  return (
    <>
    <div className="sub-app">
        <div>
        <h1>Hello World</h1>
        <h1>Counter Value:{counter}</h1>
        <button onClick={addValue}>+{counter}</button>
        <button onClick={removeValue}>-{counter}</button>
      
    </div>

    </div>
    
    </>
    
    
  )
}

export default Counter

import React from 'react'
import { useState } from 'react'

const Counters = () => {
    let [counter,setCounter] = useState(0);
  //let counter =15
  const addValue =()=>{
    //console.log("clicked",counter);
    if(counter<20){
      counter=counter+1
      //setCounter(counter+1)
      console.log(counter)
    }
    
    //setCounter(counter+1)
    setCounter(counter)
    
  }
  const removeValue =()=>{
    if(counter>0){
      setCounter(counter-1)
      console.log("remove",counter);

    }
    
  }

  return (
    <div>
        <div className="sub-app">
        <h1>hello</h1>
        <h2>Counter value:{counter}</h2>
        <button onClick={addValue}>AddValue{counter}</button><br />
        <button onClick={removeValue}>RemoveValue{counter}</button>
        <p>footer:{counter}</p>

      </div>
      
    </div>
  )
}

export default Counters

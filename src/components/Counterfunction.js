import React from 'react'
import {useState} from 'react'
function Counterfunction() {
    const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }
  function decrementCounter() {
    if (counter <= 0) {
      setCounter(0)
    }
    else {
      setCounter(counter-1)

    }
  }
  function reset() {
    setCounter(0)
  }

  return (
    <div>Counterfunction
        <h1>Counter app</h1>
        <h2>{counter}</h2>
        <button 
        style={{
          backgroundColor:"green",
          color:"white",
          padding:"10px",
          margin:"5px"
      }}
        onClick={incrementCounter}>increment</button>

        <button 
        style={{
          backgroundColor:"red",
          color:"white",
          padding:"10px"
      }}
        onClick={decrementCounter}>decrement</button><br></br>

        <button 
        style={{
          backgroundColor:"black",
          color:"white",
          padding:"10px",
          margin:"5px",
          width:"100px"
      }}
        onClick={reset}>reset</button>
    </div>
  )
}

export default Counterfunction
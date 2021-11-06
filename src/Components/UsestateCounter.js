import React from 'react';
import { useState } from 'react';

function UsestateCounter(props) {
    const [ value,setValue ] = useState(0);

    const complexIncrease = ()=>{
        setTimeout(()=>{
          setValue((prevState)=>{
           return prevState+1;
          })
        },2000)
    }
    
    return (
        <div>
            <h1>UseState counter</h1>
            <h1>{value}</h1>
            <button onClick={()=>setValue(value+1)}>Increment</button>
            <button onClick={()=>setValue(value-1)}>Decrement</button>
            <button onClick={()=>setValue(0)}>reset</button><br/>

            <h1>Complex counter</h1><br/>
            <h2>{value}</h2>
            <button onClick={complexIncrease}>Complex increase</button>

        </div>
    );
}

export default UsestateCounter;
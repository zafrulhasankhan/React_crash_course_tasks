import React from 'react';
import { useState } from 'react';

function UseStateObject(props) {
    const [person,setPerson] = useState({
        name:'nasim khan',
        age:22,
        message:'i am  a man'
    })
    const changeMsg =()=>{
      setPerson({
          ...person,
          message:'he is a goood boy'

      })
    }
    return (
        <div>
            <h1>usestate object example</h1>
            <h4>{person.name}</h4>
            <h4>{person.age}</h4>
            <h4>{person.message}</h4>
            <button onClick={changeMsg}>change Message</button>
        </div>
    );
}

export default UseStateObject;
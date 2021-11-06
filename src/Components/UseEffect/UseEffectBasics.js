import React, { useEffect, useState } from 'react';

function UseEffectBasics(props) {
    const [value, setValue] = useState(0);

        useEffect(() => {
            console.log("inside useEffect");
        },[value])
    return (
        <div>
           <h1>{value}</h1>
           <button onClick={()=>setValue(value+1)}>increase value</button>
        </div>
    );
}

export default UseEffectBasics;
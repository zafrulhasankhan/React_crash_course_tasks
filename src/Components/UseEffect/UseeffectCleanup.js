import React, { useEffect, useState } from 'react';

function UseeffectCleanup(props) {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        console.log("hello world");
        window.addEventListener('resize', checkSize);
        // return ()=>{
        //     console.log("cleanup");
        //     window.removeEventListener('resize',checkSize);
        // }
    },[])
    return (
        <div>
            <h1>window innerSize : {size}</h1>
        </div>
    );
}

export default UseeffectCleanup;
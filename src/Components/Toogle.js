import React, { useEffect, useState } from 'react';

function Toogle(props) {
    const [show,setShow] = useState(false);
    const [size,setSize] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize',checkSize);
    },[])

    const checkSize = () =>{
        setSize(window.innerWidth)
    }

    const Item = () =>{
        return (
            <h1>window size : {size} px</h1>
        )
    }
    return (
        <div>
            <button onClick={()=>setShow(!show)}>Show/Hide</button>
            {show && <Item />}
        </div>
    );
}

export default Toogle;
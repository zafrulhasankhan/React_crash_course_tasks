import React,{useEffect,useRef} from 'react';

function UseRef(props) {
    const refContainer = useRef(null);
    const handleSubmit2 =(e) =>{
        e.preventDefault();
        console.log(refContainer.current.value);
     }
 
     useEffect(()=>{
         console.log(refContainer.current.value);
          refContainer.current.focus();
     })
    return (
        <div>
             <form>
                <input type="text" ref={refContainer} />
                <button type="submit" onClick={handleSubmit2}>add person</button>
            </form>
        </div>
    );
}

export default UseRef;
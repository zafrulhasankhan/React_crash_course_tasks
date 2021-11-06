import React, { useState } from 'react';
import { data } from './Data';
function Usestate(props) {
    const [books, setBook] = useState(data)
    const removeItem=(id)=>{
        let Remove = books.filter((book)=>book.id !== id);
        setBook(Remove)
        
    }
    return (
        <div>
            {books.map((book) => {
                // console.log(book)
                const { id, authorName } = book;
                return (
                    <>
                        <h1 key={id}>{authorName}</h1>
                        <button onClick={()=>removeItem(id)}>Remove specfic object from array</button>
                    </>
                )

            })}
        </div>
    );
}

export default Usestate;
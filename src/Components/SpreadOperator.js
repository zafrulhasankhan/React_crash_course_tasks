import React from 'react';
import {book,bookPrice} from './BookObject';


function SpreadOperator(props) {
    
    const author = [

        {
            id: 1,
            authorName: 'jaber khan'
        },
        {
            id: 2,
            authorName: 'ashik mahmud'
        }
    ];

    const ClickHandler = (authorNames) => {
        /*ei filter er meaning hocse: author array r value and function parameter value
        same hole r filter korbe na , that means same batitito baki gula filter e count hbe . ekta array r specfic object baad deuar way eita.*/ 
       
        let authorRemove = author.filter((auth)=>auth.authorName !== authorNames);
        console.log(authorRemove);
    }

    const Booklist = ({ name, authorName }) => {
        console.log(authorName);
        //console.log(book);
        //const {name} = props.book;
        return (
            <h1>
                <br />
                This is using spreading operator: {name} and {authorName} and price is {bookPrice}

                {/* specifc item er value pass by onclick */}
                <button className="btn btn-primary" onClick={()=>ClickHandler(authorName)}>specfic item pass</button>
            </h1>
        )
    }

   
    return (
        <div>
            {book.map((book, index) => (
                <>
                    <Booklist key={book.id} {...book} {...author[index]} />
                </>
            ))}
        </div>
    );
}

export default SpreadOperator;
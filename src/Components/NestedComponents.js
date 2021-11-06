import React from 'react';
import './Style.css';

const Msg = (props) => {
    
    return (
        <article>
            <h1>this is the title</h1>
            <p>Tis is the message</p>
            <p>{props.job}</p>
            <p>{props.title}</p>
        </article>
    )
}

const names = ['nasim','ashk','jaber'];

const newNames = names.map((name)=>{
   return <h1>{name}</h1>
})

function NestedComponents(props) {
    return (
        <section className="booklist">
            <Msg job="web developer" />
            <Msg title="BD Team" />
            <Msg />
            <Msg />
            <Msg />
            <Msg />
            <Msg /> <br/>

            {newNames}  {/* newNames e return add korate kas korse */}
            
        </section>
    );


}
export default NestedComponents;
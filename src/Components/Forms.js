import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';


function Forms(props) {
    const [person, setPerson] = useState({ name: '', email: '', age: '' });
    const [people, setPeople] = useState([]);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPeople([...people, person]);
    }
   
    return (
        <div>
            <Form>
                <input onChange={handleChange} value={person.name} type="text" name="name" /><br />
                <input onChange={handleChange} value={person.email} type="text" name="email" /><br />
                <input onChange={handleChange} value={person.age} type="text" name="age" /><br />
                <button onClick={handleSubmit}>add person</button>
            </Form>
            {people.map((value, index) => {
                const { name, email, age } = value;
                return (
                    <>
                        <h1>{name}</h1>
                        <h1>{email}</h1>
                        <h1>{age}</h1>
                    </>
                )
            })}

    
        </div>
    );
}

export default Forms;
import React, { useReducer, useState } from 'react';
import { peopleData } from '../Data';
import Modal from '../Modal';
import { Reducer } from './Reducer';

function UseReducer(props) {

    const defaultState = {
        people: peopleData,
        isModalOpen: false,
        modalcontent: ''
    }


    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(Reducer, defaultState);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name }

            dispatch({ type: 'add_item', payload: newItem });
            setName('');
        }
        else {
            dispatch({ type: 'no_value' });
        }
    }

    const CloseModal = () =>{
        dispatch({type:'close_modal'});
    }

    return (
        <div>
            {state.isModalOpen && <Modal modalContent={state.modalcontent} closeModal={CloseModal} />}
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                <button type='submit'>Add Name</button>
            </form>

            {state.people.map((person, index) => {
                const { name } = person;
                return (
                    <>
                    <div style={{background:'black'}}>
                        <h3>{name}</h3>
                        <button onClick={()=>dispatch({type:'remove_item',payload:name})}>Remove Item</button>
                    </div><br/>
                        
                    </>
                )
            })}
        </div>
    );
}

export default UseReducer;
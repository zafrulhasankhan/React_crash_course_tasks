import React, { useEffect } from 'react';

function Modal({modalContent,closeModal}) {

    useEffect(()=>{
        setTimeout(()=>{
            closeModal();
        },3000);
    })
    return (
        <div>
            <h3>{modalContent}</h3>
        </div>
    );
}

export default Modal;
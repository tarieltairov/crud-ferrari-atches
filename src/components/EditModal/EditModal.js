import React from 'react';

import './EditModal.css'
const EditModal = ({productToEdit,  setProductToEdit, updateProduct, setModal}) => {
    // console.log('this pro bro', productToEdit)

    function handleValues (e){
        let editedProduct={
            ...productToEdit,
            [e.target.name]:e.target.value
        }
        setProductToEdit(editedProduct)
        console.log(editedProduct)
    }
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div>
                    <input  onChange={handleValues} value={productToEdit.model} type="text" className="inputs" placeholder="Model" name="model"/>
                    <input  onChange={handleValues} value={productToEdit.price} type="text" className="inputs" placeholder="Price" name="price"/>
                    <input  onChange={handleValues} value={productToEdit.image} type="text" className="inputs" placeholder="Image" name="image"/>
                </div>
                <button id="modal-btn" onClick={()=> updateProduct()}>Save</button>
                <button id="close-modal" onClick={()=> setModal(false)}>Close</button>
            </div>
        </div>
    );
};

export default EditModal;
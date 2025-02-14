import React from 'react';
// import Boton from './Boton';

const Add = ({ add }) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const onsubmit = (e) => {
        if(!name || !price){
            alert("Faltan datos");
            return;
        }
        e.preventDefault();
        add({name, price});
        setName("");
        setPrice("");
    };
    return (
        <form onSubmit={onsubmit}>
            <input 
            onChange={(e) => {setName(e.target.value)}}
             value={name} 
             type="text" 
             name="" 
             id="" 
             />
            <input onChange={(e) => {setPrice(e.target.value)}}
             value={price} 
             type="text" 
             name=""
             id="" 
             />
            <input type="submit" value={"Add"} />
        </form>
    );
}

export default Add;
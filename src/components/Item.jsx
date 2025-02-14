import React from "react";
import Boton from "./Boton";

const Item = ({item, ondelete}) => {
    return (
        <div>
            <ol>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>
                    <Boton click={() => ondelete(item.id)} name={"X"} />
                </li>
            </ol>
        </div>
    );
}

export default Item;
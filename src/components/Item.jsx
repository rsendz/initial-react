import React from "react";
import Boton from "./Boton";
import { Link } from "react-router-dom";

const Item = ({item, ondelete}) => {
    return (
        <tr>
            <Link to={"/items/"+item.id_item + "?q=react55"}>
                <td>{item.name}</td>
            </Link>
            <li>{item.price}</li>
            <li>
                <Boton click={() => ondelete(item.id_item)} name={"X"} />
            </li>
        </tr>
    );
}

export default Item;
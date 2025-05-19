import React from "react";
import Boton from "./Boton";
import { Link } from "react-router-dom";

const Item = ({item, ondelete}) => {
    return (
    <tr>
      <td>
        <Link to={`/items/${item.id}?q=react55`}>{item.name}</Link>
      </td>
      <td>{item.price}</td>
      <td>
        <Boton name='X' click={() => ondelete(item.id)} />
      </td>
    </tr>
    );
}

export default Item;
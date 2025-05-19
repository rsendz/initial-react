import React from "react";
import Item from "../components/Item";

const List = ({ items, ondelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Delete?</td>
                </tr>
            </thead>
            <tbody>
            {items.map((i) => (
                <Item key={i.id_item} item={i} ondelete={ondelete} />
            ))}
            </tbody>
        </table>
    );
};

export default List;
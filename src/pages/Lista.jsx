import React from "react";
import Item from "../components/Item";

const List = ({ items, ondelete }) => {
    return (
        <>
            {items.map((i) => (
                <Item key={i.id_item} item={i} ondelete={ondelete} />
            ))}
        </>
    );
};

export default List;
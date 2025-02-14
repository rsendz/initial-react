import React from "react";
import Item from "./Item";

const List = ({ items, ondelete }) => {
    return (
        <>
            {items.map((i) => (
                <Item key={i.id} item={i} ondelete={ondelete} />
            ))}
        </>
    );
};

export default List;
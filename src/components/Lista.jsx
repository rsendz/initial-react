import React from "react";
import Item from "./Item";

const List = ({ items }) => {
    return (
        <>
            {items.map((i) => (
                <Item key={i.id} item={i} />
            ))}
        </>
    );
};

export default List;
import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const ItemInfo = (items ) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams(); 
    const item = items.find((i) => i.id === id);
    return (
        <div>
            <h1>Item Info {id}</h1>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <h3>Search params {searchParams.get("")}</h3>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    );
};

export default ItemInfo;
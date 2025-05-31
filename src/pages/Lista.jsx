import React from "react";
import Item from "../components/Item";

const List = ({ items, ondelete }) => {
  return (
    <div className="page-container pd-top">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item item={item} key={item.id} ondelete={ondelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;

import React from "react";
import { useNavigate } from "react-router-dom";

const Add = ({ add }) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const onsubmit = (e) => {
    if (!name || !price) {
      alert("Missing data");
      return;
    }
    e.preventDefault();
    add({ name, price });
    setName("");
    setPrice("");
    navigate("/items");
  };
  return (
    <form onSubmit={onsubmit} className="page-container pd-top">
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        type="text"
        name=""
        id=""
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
        type="text"
        name=""
        id=""
        placeholder="Price"
      />
      <input type="submit" value={"Add"} />
    </form>
  );
};

export default Add;

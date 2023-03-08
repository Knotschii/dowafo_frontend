import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ singleshopinglist, setClicked, clicked }) => {
  const [item, setItem] = useState({});
  const { itemName, itemCount } = item;

  console.log("singleshopinglist in Additem", singleshopinglist);
  console.log("new item in Additem", item);

  function handleAddItemSubmit(event) {
    console.log("clicked");
    event.preventDefault();
    axios.post(
       `https://dowafo-be.onrender.com/additem/${singleshopinglist._id}`,
      //`http://localhost:5000/additem/${singleshopinglist._id}`,
      { itemName, itemCount }
    );
    setClicked(!clicked);
  }

  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="form">
      <h2>Add new Item</h2>
      <input
        type="text"
        placeholder="Name of the Item"
        onChange={handleChange}
        name="itemName"
      />
      <input
        type="number"
        placeholder="How many?"
        onChange={handleChange}
        name="itemCount"
      />
      <button onClick={handleAddItemSubmit}>Add New Item</button>
    </div>
  );
};
export default AddItem;

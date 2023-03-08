import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";

export default function Stock() {
  const [warehouse, setWarehouse] = useState("");
  const [itemName, setItemName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [clicked, setClicked] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const [updatedItemName, setUpdatedItemName] = useState("");
  const [updatedItemExpDate, setUpdatedItemExpDate] = useState(""); 

  const { _id } = useParams();
  console.log(useParams());

  useEffect(() => {
    const getWarehouse = async () => {
      axios
        .get(
          "https://dowafo-be.onrender.com/warehouse/63fcdeb7990519e93c118aa1"
        )
        .then((data) => {
          setWarehouse(data.data);
        })
        .catch((err) => console.log(err));
    };
    getWarehouse();
  }, []);

  const handleEditItem = async (itemId) => {
    try {
      
      await handleEditItem(itemId, updatedItemName, updatedItemExpDate
      );
      setUpdatedItemExpDate("");
      setUpdatedItemName("");
  }catch(err){
    console.log(err)
  }
  };

  const handleDeleteItem = (value) => {
    console.log(value);
    axios
      .delete(`https://dowafo-be.onrender.com/items/${value}`, {
        listid: warehouse._id,
      })
      .then((res) => {
        console.log("deleted", res);
        setClicked(!clicked);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleAddItem = async () => {
    try {
      const newItem = { itemName, expDate };
      const response = await axios.post(
        "https://dowafo-be.onrender.com/items",
        newItem
      );
      // Aktualisiere Artikel in state
      setWarehouse((prevState) => {
        const updatedItems = [...prevState.items, response.data];
        return { ...prevState, items: updatedItems };
      });
      // Reset input fields
      setItemName("");
      setExpDate("");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Warehouse", warehouse);
  

  return (
    warehouse && (
      <div>
        <h1>Sians Stock</h1>
        {warehouse.items.length &&
          warehouse.items.map((item, index) => {
            const expDate = moment(item.expDate);
            //const daysLeft = Math.ceil(moment.duration(expDate.diff(moment())).asDays());
            const daysLeft = moment(expDate).isValid()
              ? Math.ceil(moment.duration(expDate.diff(moment())).asDays())
              : "undefined";

            return (
              <div key={index}>
               <h4>{item.itemName}</h4>
              <p>Time left: ({daysLeft} days)</p>
              <input
                type="text"
                placeholder="New item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <input
                type="date"
                placeholder="New expiry date"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
              />
              <button onClick={() => {handleEditItem(item._id);}}>Edit</button>
              <button onClick={() =>{ handleDeleteItem(item._id);}}>Delete</button>
            </div>
          );
        })}
    </div>
  )
);
}

/*
  return (
    warehouse && (
      <div>
        <h1>Sians Warehouse</h1>
        {warehouse.items.length &&
          warehouse.items.map((item) => {
            return (
              <>
                <li>{item.itemName} {item.expDate}</li>
                <button>Edit</button>
              </>
            );
          })}
      </div>
    )
  );
}
*/

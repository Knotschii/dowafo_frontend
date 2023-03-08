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
      const updatedItem = { itemName, expDate };
      await axios.put(
        `https://dowafo-be.onrender.com/items/${itemId}`,
        updatedItem
      );
      // Aktualisiere Artikel in state
      setWarehouse((prevState) => {
        const updatedItems = prevState.items.map((item) => {
          if (item._id === itemId) {
            return { ...item, ...updatedItem };
          } else {
            return item;
          }
        });
        return { ...prevState, items: updatedItems };
      });
    } catch (error) {
      console.log(error);
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
          warehouse.items.map((item) => {
            const expDate = moment(item.expDate);
            //const daysLeft = Math.ceil(moment.duration(expDate.diff(moment())).asDays());
            const daysLeft = moment(expDate).isValid()
              ? Math.ceil(moment.duration(expDate.diff(moment())).asDays())
              : "undefined";

            return (
              <div key={item._id}>
                <h4>{item.itemName}</h4>
                <p>Time left: ({daysLeft} days)</p>
                <button onClick={() => {handleEditItem(item._id);}}>Edit</button>
                <button onClick={() =>{ handleDeleteItem(item._id);}}>Delete</button>
              </div>
            );
          })}
          <div>
            <input type ="text" placeholder="item Name" onChange={handleAddItem} name="itemName"></input>
            <input type="date" placeholder="expiry Date" onChange={handleAddItem} name ="expDate"></input>
        <button onClick={handleAddItem}>Add Item</button>
        </div>
        */ }
        
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

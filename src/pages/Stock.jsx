import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Stock() {
  const [warehouse, setWarehouse] = useState("");

  useEffect(() => {
    const getWarehouse = async () => {
      axios
        .get("http://localhost:5000/warehouse/63fcdeb7990519e93c118aa1")
        .then((data) => {
          setWarehouse(data.data);
        })
        .catch((err) => console.log(err));
    };
    getWarehouse();
  }, []);

  console.log("Warehouse", warehouse);

  return (
    warehouse && (
      <div>
        <h1>Sians Warehouse</h1>
        {warehouse.items.length &&
          warehouse.items.map((item) => {
            return (
              <>
                <li>{item.itemName}</li>
                <button>open</button>
              </>
            );
          })}
      </div>
    )
  );
}

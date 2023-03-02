import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function getShopinglist() {
  return axios
    .get("https://dowafo-be.onrender.com/shopinglist")
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

const Shopinglist = () => {
  const [shopinglist, setShopinglist] = useState([]);

  useEffect(() => {
    getShopinglist().then((data) => setShopinglist(data.shopinglist));
  }, []);

  console.log("state", shopinglist);

  return (
    <div>
      <h1>My Shopinglists</h1>
      <ul>
        {shopinglist.length &&
          shopinglist.map((list) => (
            <Link to={`/shopinglist/${list._id}`}>
              <li key={list._id}>{list.shopinglistName}</li>
            </Link>
          ))}
      </ul>
      <button>
        <Link to="/addshopinglist">Add new Shopinglist</Link>
      </button>
    </div>
  );
};

/*
const Shopinglists = () => {
    const [shopinglists, setShopinglists] = useState([])

    useEffect(()=>{
        axios.get("https://dowafo-be.onrender.com/shopinglist")
        .then(res=>{
            console.log(res.data.shopinglist)
            setShopinglists(res.data.shopinglist)
        })
    })

    useEffect(() => {
        const fetchAllShopinglists = async () => {
            try{
                const res = await axios.get("https://dowafo-be.onrender.com/shopinglist")
                setShopinglists(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllShopinglists()
    },[]);

    return <div>
            <h1>My Shopinglists</h1>
            <div className="shopinglists" key={shopinglists.id}>
                {shopinglists.map(shopinglist=>(
                    <div className="shopinglist">
                        <h2>{shopinglist.shopinglistName}</h2>
                        
            </div>
            
            ))}
            </div>
        </div>
    
}
*/

export default Shopinglist;

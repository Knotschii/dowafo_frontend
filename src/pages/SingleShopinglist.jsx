import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";



//EASTEREGG!!! xD
const SingleShopinglist = () => {
  const [singleshopinglist, setSingleShopinglist] = useState();

  const [itemName, setItemName] = useState([]);
  const [itemCount, setItemCount] = useState([]);


  const navigate = useNavigate();

  const { _id } = useParams();

  console.log(useParams());

  function getSingleShopinglist() {
    return axios
      .get(`https://dowafo-be.onrender.com/shopinglist/${_id}`)
      .then((res) => {
        setSingleShopinglist(res.data);
        console.log("res data", res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getSingleShopinglist().then((data) =>
      setSingleShopinglist(data.shopinglist.id)
    );
  }, []);

  console.log("single list", singleshopinglist);

  function handleAddItemSubmit(event){
    event.preventDefault();
    axios.post(`https://dowafo-be.onrender.com/shopinglist/${_id}/items`)
    const newItem = {
      itemName: itemName,
      itemCount: itemCount
    };

    
  }
  

  return singleshopinglist ? (
    <div>
      <h1>{singleshopinglist.shopinglistName}</h1>
      <ul>
        {singleshopinglist.items.length ? (
          singleshopinglist.items.map((item) => (
            <>
              {" "}
              {/* amount, ... */}
              <li key={item._id}>{item.itemName} {item.itemCount} x</li>
              <button>edit</button>
              {/* Request to endpoint "move to warehouse" */}
              <button>buy</button>
              {/* Request to delete item */}
              <button>delete</button>
        
            </>
            
            
          ))
        ) : (
          <h1>no items :(</h1>
        )}
      </ul>
      
      
    </div>
    
  ) : (
    <h1>...loading</h1>
  );
  



};


export default SingleShopinglist
/*
const getSingleShopinglist = async (id) =>{
    try{
        const response = await axios.get(`https://dowafo-be.onrender.com/shopinglist${id}`);
        return response.data;

    }catch(err){
        console.log(err);
    }
}

const Singleshopinglist = ({id}) =>{
    const [singleshopinglist, setSingleShopinglist] = useState({});

    useEffect(() =>{
        const fetchAllShopinglists = async () =>{
            const data = await getSingleShopinglist(id);
            setSingleShopinglist(data);
        };
        fetchAllShopinglists()
    },[id]);

    return(
        <div>
            <h2>{Shopinglist.shopinglistName}</h2>
            <ul>
                {shopinglist.length && shopinglist.map(shopinglist.id =>
                    <li key={items._id}>{items.itemName}</li>)}
            </ul>
        </div>
    )
}

export default Singleshopinglist;


/*

function getSingleShopinglist() {
    return axios.get(`https://dowafo-be.onrender.com/shopinglist/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));
}

const SingleShopinglist = () => {
    const [singleshopinglist, setSingleShopinglist] = useState([]);

    useEffect(() =>{
        getSingleShopinglist().then(data => setSingleShopinglist(data.singleshopinglist));
    },[]);

    console.log('state',singleshopinglist)
};
export default SingleShopinglist;
*/

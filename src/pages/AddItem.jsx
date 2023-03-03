import React from "react";
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const AddItem = () => {
    const [item, setItem] = useState({
      openedItem:"",
      openDate:"",
      itemName:"",
      itemCount:"",
      expDate:"",
    });
  
  
  const navigate = useNavigate()

  const handleChange =(e) =>{
      setItem(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async e => {
      e.preventDefault()
      try{
          await axios.post("https://dowafo-be.onrender.com/item", item)
         // navigate(`/shopinglist/${_id}`)
      }catch(err){
          console.log(err)
      }
  }



<div className='form'>
            <h1>Add new Item</h1>
            <input type="text" placeholder='Name of the Item' onChange={handleChange} name="item.itemName"/>
            <input type="number" placeholder='How many?' onChange={handleChange} name="item.itemCount"/>
            <button onClick={handleClick}>Add New Item</button>
        </div>
}; 
export default AddItem
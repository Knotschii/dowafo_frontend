import React from 'react';
import axios from 'axios';
import {useState} from 'react';

export default function CreatePage() {
const [data,setData]=useState({
    shopinglistName
})

const trackInput = (e) => {
    const newdata= {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
}

const post = (e) => {
    e.preventDefault();
    // console.log('sent')
    axios
    .post("https://dowafo-be.onrender.com/createshopinglist",{
        company: data.shopinglistName,
        })
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
}
  return (
    <div className='container'>
    <div className='col-6 offset-3 mt-4 text-center '>
        <h4 className='mb-5'>Here you can post a new Shopinglist</h4>
    <form onSubmit={post} className='d-flex flex-column gap-2 '  >
        <label>Shopinglist Name</label>
        <input type='text'  onChange={(e=>trackInput(e))} id='shopinglistName' value={data.shopinglistName} required  ></input>
        
    </form>
    </div>
    </div>
  )
}

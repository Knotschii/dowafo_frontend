import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Shopinglist from "./Shopinglist";

function getSingleShopinglist() {
    return axios.get("https://dowafo-be.onrender.com/shopinglist")
    .then(res => res.data.shopinglist.id)
    .catch(err => console.log(err));
}

    const SingleShopinglist =() =>{
        const [singleshopinglist, setSingleShopinglist] = useState([]);

    useEffect(() =>{
        getSingleShopinglist().then(data => setSingleShopinglist(data.shopinglist.id));
        },[]);
        
    return(
        <div>
            <h1>{SingleShopinglist.shopinglistName}</h1>
            <ul>
                {
                   singleshopinglist.length && singleshopinglist.map(shopinglist =>
                        <li key={shopinglist._id}>{shopinglist.shopinglistName}</li>)
                }
            </ul>
        </div>
    )
}

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
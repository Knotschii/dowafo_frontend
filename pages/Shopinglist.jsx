import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Shopinglist = () => {
    const [shopinglists, setShopinglists] = useState([])

    useEffect(() => {
        const fetchAllShopinglists = async () => {
            try{
                const res = await axios.get("https://dowafo-be.onrender.com/shopinglist")
                console.log(res)
            }catch(err){
                console.log(err.message)
            }
        }
    },[])

    return(
        <div>
            Shopinglist Test
        </div>
    )
}

export default Shopinglists
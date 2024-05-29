import React, { useState } from 'react'
import axios from "axios";

// import Files
import * as Config from "../Utils/Config";
import { header } from "../Utils/ApiHeader";


// ALL CLIENTS
export async function ALL_CLIENTS(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}getall/clients`, data, {
            
            headers: header(token),
            data: {

                "page": "5",
                "limit": "1"

            },
        })


        return await res?.data;
    }
    catch (err) {
        console.log("error", err);
        // custom error
    }

}
 
 
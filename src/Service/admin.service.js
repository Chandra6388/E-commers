import React, { useState } from 'react'
import axios from "axios";
// import Files
import * as Config from "../Utils/Config";



// LOGIN-USER
export async function LOGIN_USER(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}login`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}
 
 
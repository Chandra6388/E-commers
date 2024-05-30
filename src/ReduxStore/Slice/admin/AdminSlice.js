import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { LOGIN_USER } from "../../../Service/admin.service";


export const Login_User = createAsyncThunk("/login", async (data) => {
    try {
        const res = await LOGIN_USER(data);
        return await res;
    } catch (err) {
        return err;
    }
});

const AdminHelpSlice = createSlice({
    name: "AdminHelpSlice",
    initialState: {
        isLoading: false,
        isError: false,
        helps: [],
        status: false,
        login_user: [],
    },

    recuders: {},
    extraReducers: (builder) => {
        builder
          .addCase(Login_User.pending, (state, action) => {
            state.isLoading = true;
          })
          .addCase(Login_User.fulfilled, (state, action) => {
            state.isLoading = false;
            state.login_user = action.payload;
          })
          .addCase(Login_User.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
          })
          
      },
});




export default AdminHelpSlice;

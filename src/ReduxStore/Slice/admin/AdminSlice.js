import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { LOGIN_USER , SIGNUP_USER } from "../../../Service/admin.service";


export const Login_User = createAsyncThunk("/login", async (data) => {
    try {
        const res = await LOGIN_USER(data);
        return await res;
    } catch (err) {
        return err;
    }
});

export const SignupUser = createAsyncThunk("/signup", async (data) => {
  try {
      const res = await SIGNUP_USER(data);
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
        signupUser: [],
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
          .addCase(SignupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.signupUser = action.payload;
          })
          
      },
});




export default AdminHelpSlice;

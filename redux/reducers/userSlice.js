import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      userObj:{}
    },
    reducers: {
      createAccount:(state,action)=>{
        state.userObj = action.payload;
      }
    },
  });
  
  
  export const { createAccount } = userSlice.actions;
  export default userSlice.reducer;
  
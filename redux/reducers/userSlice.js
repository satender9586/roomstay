import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userObj: {},
    email: "",
  },
  reducers: {
    createAccount: (state, action) => {
      state.userObj = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { createAccount, setEmail } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
    isVerified: false,
    plan: "free",
    isLoggedIn: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserSlice: (state, action) => {
      const obj = action.payload;
      state.email = obj.email;
      state.firstName = obj.firstName;
      state.lastName = obj.lastName;
      state.isAdmin = obj.isAdmin;
      state.isVerified = obj.isVerified;
      state.plan = obj.plan;
      state.isLoggedIn = true;
      console.log(state, "set user slice");
    },
    clearUserSlice: (state) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.isAdmin = false;
      state.isVerified = false;
      state.plan = "free";
      state.isLoggedIn = false;
      console.log(state, "clear user slice");
    },
  },
});

export const { setEmail, setUserSlice, clearUserSlice } = userSlice.actions;
export default userSlice.reducer;

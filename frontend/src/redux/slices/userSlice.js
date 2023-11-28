import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser"))
    : "",
};

const userSlice = createSlice({
  name: "loggedUer",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
    },
    logout: (state, action) => {
      state.loggedUser = "";
      localStorage.clear();
    },
  },
});

export const { setLoggedUser, logout } = userSlice.actions;
export default userSlice.reducer;
